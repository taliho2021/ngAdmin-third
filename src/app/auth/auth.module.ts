import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LoginComponent } from './login/login.component';
import { Page404Component } from './page404/page404.component';
import { RecoverpwdComponent } from './recoverpwd/recoverpwd.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AuthComponent,
    ComingSoonComponent,
    LoginComponent,
    Page404Component,
    RecoverpwdComponent,
    RegisterComponent,
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
    AuthRoutingModule,
  ],
  exports: [],
})
export class AuthModule {}
