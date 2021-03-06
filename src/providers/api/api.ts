import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = 'http://localhost:3000';

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params: any = {}, reqOpts: any = {}) {
    if (!reqOpts.params) {
      reqOpts.params = new HttpParams();

      for (const key in params) {
        reqOpts.params = reqOpts.params.set(key, params[key]);
      }
    }

    return this.http.get(this.url + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + endpoint, body, reqOpts);
  }
}
