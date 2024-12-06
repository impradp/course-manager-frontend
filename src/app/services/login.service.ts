import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/v1/instructors'; // Backend endpoint

  constructor(private http: HttpClient) {}

  login(loginData: LoginModel): Observable<any> {
    return this.http.post(this.apiUrl, loginData);
  }
}