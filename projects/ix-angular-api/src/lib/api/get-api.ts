import { HttpClient, HttpParams } from '@angular/common/http';
import { API } from './api';
import { Resource } from './resource';

export abstract class GetAPI extends API {

    abstract getParams(): HttpParams;
    abstract getResource(): Resource;
    abstract validate();

    serve(http: HttpClient, baseURL: string) {
        let url = Resource.constructUrl(baseURL, this.getResource());

        return http.get(url, {params: this.getParams()})
    }
}