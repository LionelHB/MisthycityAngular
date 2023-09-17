import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../modele/user/user.component';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) { }

  getUserById(Id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`/api/users/${Id}`);
   
  }
  getUserByUsername(username: string): Observable<UserModel> {
    const url = `${this.baseUrl}?username=${username}`;
    return this.http.get<UserModel>(url);
  }
}



