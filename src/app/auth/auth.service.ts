import * as moment from 'moment';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setSessionStorage(responseObj: any) {
    // Adds the expiration time defined on the JWT to the current moment
    const expiresAt = moment().add(
      Number.parseInt(responseObj.expires),
      'days'
    );

    sessionStorage.setItem('id_token', responseObj.token);
    sessionStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    sessionStorage.removeItem('id_token');
    sessionStorage.removeItem('expires_at');
    this.router.navigate(['../auth/login']);
  }

  public isLoggedIn(): boolean {
    let authToken = sessionStorage.getItem('id_token');
    return authToken !== null ? true : false;
    // const dateNow = new Date();
    // const expiration = sessionStorage.getItem('expires_at');
    // const expiresAt = JSON.parse(expiration!);
    // return expiresAt < dateNow.getTime();
    // return
    // return moment().isBefore(this.getExpiration(), 'hour');
    // return true;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = sessionStorage.getItem('expires_at');
    if (expiration) {
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
    } else {
      return moment();
    }
  }

  // getExpiration() {
  //   const expiration = sessionStorage.getItem('expires_at');
  //   const expiresAt = JSON.parse(expiration!);
  //   return moment(expiresAt);
  // }
}
