import { Injectable } from '@angular/core';
//import { Url } from 'url';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../shared/model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private Url: string = ('https://66cf3101901aab2484214a81.mockapi.io/api/v1/login');

  constructor(private http: HttpClient) { }

  
  getLoginApi(): Observable<any[]> {
  return this.http.get<any[]>(this.Url);
  }
  
  postLoginApi(data: any): Observable<any> {
  return this.http.post<any>(`${this.Url}`, data);
  }
}
