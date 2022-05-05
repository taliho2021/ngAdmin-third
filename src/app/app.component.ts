import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngAdmin-third';

  showContents = true;
  showTemplate = true;
  items = ['a', 'b', 'c', 'd'];

  constructor(private authService: AuthService,
              private router: Router){}

  logout() {
    this.authService.logout();
    this.router.navigate(['/home'])
  }
}
