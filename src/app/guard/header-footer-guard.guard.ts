// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root',
// })
// export class HeaderFooterGuard {
//   canActivateFn: CanActivateFn = (route, state) => {
//     const hiddenHeaderFooter = this.checkHiddenHeaderFooter(route);

//     if (hiddenHeaderFooter || state.url === '/not-found') {
//       return true;
//     } else {
//       this.router.navigate(['/not-found']);
//       return false;
//     }
//   };

//   constructor(private router: Router) { }

//   checkHiddenHeaderFooter(route: ActivatedRouteSnapshot): boolean {
//     const path = route.routeConfig?.path;
//     return path === 'not-found';
//   }
// }
