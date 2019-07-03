import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from './api';

export const URL_TOKEN = new InjectionToken<string>('API_BASE_URL');

@Injectable({
  providedIn: 'root'
})
export class APIService {
  constructor(private http: HttpClient, @Inject(URL_TOKEN) private URL: string) { }

  public call(api: API): Observable<any> {
    return api.call(this.http, this.URL);
  }
}
