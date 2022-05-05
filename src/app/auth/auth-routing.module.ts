import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoverpwdComponent } from './recoverpwd/recoverpwd.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'comingSoon', component: ComingSoonComponent },
      { path: 'login', component: LoginComponent },
      { path: 'page404', component: Page404Component },
      { path: 'profile', component: ProfileComponent },
      { path: 'recoverpwd', component: RecoverpwdComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
