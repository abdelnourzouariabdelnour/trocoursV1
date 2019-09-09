import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl:string = "http://localhost:3000/"; 
  httpOptionsDefault: any;

  constructor(private http: HttpClient) {
    this.httpOptionsDefault = {
      headers: new HttpHeaders({'Content-Type': 'application/json', "Accept": 'application/json'})
    };
  }

  get(e){
    return this.http.get(this.apiUrl + e);
  }

  post(e, data){
    return this.http.post(this.apiUrl + e, data, this.httpOptionsDefault);
  }

  
}
