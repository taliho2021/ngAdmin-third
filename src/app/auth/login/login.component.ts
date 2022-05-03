import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    @ViewChild('loginform', { static: false }) loginform!: NgForm;

  loginForm = this.fb.group  ({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService,
  ) { }


  onLoginSubmit() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    const headers = new HttpHeaders({'Content-type': 'application/json'});

    const reqObject = {
      username: username,
      password: password
    };

    this.http.post('http://localhost:8080/auth/signin', reqObject, { headers: headers }).subscribe(

      // The response data
      (response) => {

        // If the user authenticates successfully, we need to store the JWT returned in localStorage
        this.authService.setSessionStorage(response);

      },

      // If there is an error
      (error) => {
        console.log(error);
      },

      // When observable completes
      () => {
        console.log('done!');
        this.router.navigate(['/home/nav']);
      }

    );
  }

  onLogout() {
    this.authService.logout();
  }


  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

}