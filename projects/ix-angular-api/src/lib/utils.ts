export class Utils {
    static assertNotNull(target: any, label: string) {
        if (!target) throw new Error(label + " validation failed.");
    }

    static assertNotEmpty(target: any, label: string) {
        if ((!target) || (target.length == 0)) throw new Error(label + " validation failed.");
    }

    static parseEpochToDate(epoch: number) {
      let todayEpoch = new Date().getTime()
      return Math.round(((todayEpoch - epoch)) / (24*60*60*1000))
    }
}