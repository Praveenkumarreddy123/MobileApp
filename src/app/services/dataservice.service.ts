import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class DataserviceService {
  WebServiceUrl = environment.WebServiceUrl;
  constructor(private http: HttpClient) {}
  public listUser() {
    return this.http.get(this.WebServiceUrl + '/api/users');
  }
  public sigleUser() {
    return this.http.get(this.WebServiceUrl + '/api/users');
  }
}
