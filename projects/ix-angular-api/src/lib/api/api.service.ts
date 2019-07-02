import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient, private URL: string) { }

  public call(api: API): Observable<any> {
    return api.call(this.http, this.URL);
  }
}
