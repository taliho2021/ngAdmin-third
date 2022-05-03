import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { ProfileComponent } from './profile/profile.component';
import { RecoverpwdComponent } from './recoverpwd/recoverpwd.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthComponent,
    ComingSoonComponent,
    LoginComponent,
    Page404Component,
    ProfileComponent,
    RecoverpwdComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSelectModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    Page404Component
  ]
})
export class AuthModule { }
