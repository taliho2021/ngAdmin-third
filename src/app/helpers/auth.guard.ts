import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean 
      {
        if (this.authService.isLoggedIn())
        {
          console.log('true', this.authService.isLoggedIn())
          return true
        }
       console. log("else:" , this.authService.isLoggedIn())
        return false;
    }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if (this.authService.isLoggedIn())
  //     {
  //       console.log(this.authService.isLoggedIn())
  //       return true
  //     }
  //    console. log("else:" , this.authService.isLoggedIn())
  //     return false;
  // }
  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if (this.authService.isLoggedIn())
  //     {
  //       return true
  //     }
  //     return false;
  // }
  
}
