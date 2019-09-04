import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiEndpoint = environment.apiBaseUrl;
  constructor(
    private http:HttpClient
  ) { }

  getData(url, param) {
      return this.http.get<any>(this.apiEndpoint + url, {params: param});
  }

  postData(url, data) {
      return this.http.post<any>(this.apiEndpoint + url, data);
  }

  putData(url, data) {
      return this.http.put<any>(this.apiEndpoint + url, data);
  }

}
