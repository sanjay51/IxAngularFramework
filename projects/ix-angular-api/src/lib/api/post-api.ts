 import { HttpClient } from '@angular/common/http';
import { API } from './api';
import { Resource } from './resource';

export abstract class PostAPI extends API {
    abstract getBody(): any;
    abstract getResource(): Resource;
    abstract validate();

    serve(http: HttpClient, baseURL: string) {
        let url = Resource.constructUrl(baseURL, this.getResource());

        return http.post(url, this.getBody());
    }
}