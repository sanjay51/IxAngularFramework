import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

export abstract class API {

    public call(http: HttpClient, URL: string): Observable<any> {
        this.validate()
        return this.serve(http, URL);
    }

    abstract validate();
    abstract serve(http: HttpClient, URL: string);
}