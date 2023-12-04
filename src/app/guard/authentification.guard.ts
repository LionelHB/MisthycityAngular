// // authentification.guard.ts

// import { Injectable } from '@angular/core';
// import { CanActivateChild, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service'; // Assurez-vous d'importer correctement le service

// @Injectable({
//   providedIn: 'root',
// })
// export class authentificationGuard implements CanActivateChild {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivateChild(): boolean {
//     if (!this.authService.isAuthenticated()) {
//       return true; // L'utilisateur est authentifié, autorisez l'accès aux routes enfants.
//     } else {
//       this.router.navigate(['/login']); // Redirigez vers la page de connexion si l'utilisateur n'est pas authentifié.
//       return false; // N'autorisez pas l'accès aux routes enfants.
//     }
//   }
// }
