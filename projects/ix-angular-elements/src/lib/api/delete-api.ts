import { HttpClient, HttpParams } from '@angular/common/http';
import { API } from './api';
import { Resource } from './resource';

export abstract class DeleteAPI extends API {

    abstract getParams(): HttpParams;
    abstract getResource(): Resource;
    abstract validate();

    serve(http: HttpClient, baseURL: string) {
        let url = Resource.constructUrl(baseURL, this.getResource());

        return http.delete(url, {params: this.getParams()})
    }
}