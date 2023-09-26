import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importez le module HttpClient pour effectuer des requêtes HTTP

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  login(email: string, password: string): Promise<boolean> {
    const loginData = {
      email: email, 
      password: password
    };

    return this.http.post<any>('http://localhost:8000/api/login_check', loginData)
      .toPromise()
      .then(response => {
        
        if (response && response.accessToken) {
          localStorage.setItem('jwt_token', response.accessToken);
        this.isLoggedIn = true;
        return true;
      } else {
        return false;
      }
    })
      .catch(error => {
        localStorage.removeItem('jwt_token');
        this.isLoggedIn = false;
        return false; 
      });
  }

  logout() {
    this.isLoggedIn = false;
  }
}
