import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = `https://taskfrontendapi.azurewebsites.net/api/user/login`;
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    return this.http.post(this.url, user);
  }


  isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token') !== null;
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}
