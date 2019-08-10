
export class Flow {
    private state: State;
    private initialStep: Step;
    private stepMap = {};

    constructor(initialStep: Step, initialState: State) {
        this.initialStep = initialStep;
        this.state = initialState;
    }

    public async invoke() {
        let step = this.initialStep;
        let result: string = await this.initialStep.execute(this.state);

        while(result != "finished") {
            // determine next step
            if ((! this.stepMap[step.id]) || (! this.stepMap[step.id][result])) {
                console.error("Flow did not finish in FINISHED state or no next step for step: " + step.id + "; result:" + result) ;
                break;
            }

            step = this.stepMap[step.id][result];

            // execute next step
            console.log("Executing step: " + step.id + "; with state: " + JSON.stringify(this.state));
            result = await step.execute(this.state);
            console.log("Result: " + result + "; state: " + JSON.stringify(this.state));
        }
    }

    public addTransition(oldStep: Step, result: string, newStep: Step) {
        if (! this.stepMap[oldStep.id]) {
            this.stepMap[oldStep.id] = {}
        }

        this.stepMap[oldStep.id][result] = newStep;
    }
}

export abstract class Step {
    public id: string;

    constructor(id: string) {
        this.id = id;
    }

    abstract init(): void;
    abstract async execute(state: State): Promise<string>; // returns "result"
}

export class State {
    state = {}

    set(key: string, value: any): void {
        this.state[key] = value;
    }

    get(key: string): string {
        return this.state[key];
    }
}

export class FinishedStep extends Step {
    private constructor() {
        super("finished");
    }

    public static get(): FinishedStep {
        return new FinishedStep();
    }

    init(): void {
        // do nothing
    }
    
    async execute(state: State): Promise<string> {
        return "finished";
    }
}