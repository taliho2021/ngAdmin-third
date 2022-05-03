import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { Page404Component } from './auth/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',  component: LoginComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'operations',
    loadChildren: () =>
      import('./operations/operations.module').then((m) => m.OperationsModule),
  },
  {
    path: 'parties',
    loadChildren: () =>
      import('./parties/parties.module').then((m) => m.PartiesModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'tables',
    loadChildren: () =>
      import('./tables/tables.module').then((m) => m.TablesModule),
  },
  { path: 'widgets', 
  loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },

  { path: '**',
    component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
