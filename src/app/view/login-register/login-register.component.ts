import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'; // Importez le service du routeur

@Component({
  selector: 'ns-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLoginSubmit(): void {
    const username = this.email;
    const password = this.password;

    this.authService.login(username, password)
      .then((loggedIn: boolean) => {
        if (loggedIn) {
          this.router.navigate(['/histoire']);
        } else {
        }
      })
      .catch((error: any) => {
      });
  }
}
