import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'importers',
        loadChildren: () =>
          import('./importers/importers.module').then((m) => m.ImportersModule),
      },
      {
        path: 'exporters',
        loadChildren: () =>
          import('./exporters/exporters.module').then((m) => m.ExportersModule),
      },
      {
        path: 'forwarders',
        loadChildren: () =>
          import('./forwarders/forwarders.module').then(
            (m) => m.ForwardersModule
          ),
      },
      {
        path: 'truckers',
        loadChildren: () =>
          import('./truckers/truckers.module').then((m) => m.TruckersModule),
      },
      {
        path: 'cfs-terminal-oper',
        loadChildren: () =>
          import('./cfs-terminal-oper/cfs-terminal-oper.module').then(
            (m) => m.CfsTerminalOperModule
          ),
      },
      {
        path: 'air-carriers',
        loadChildren: () =>
          import('./air-carriers/air-carriers.module').then(
            (m) => m.AirCarriersModule
          ),
      },
      {
        path: 'sea-carriers',
        loadChildren: () =>
          import('./sea-carriers/sea-carriers.module').then(
            (m) => m.SeaCarriersModule
          ),
      },
      {
        path: 'service-providers',
        loadChildren: () =>
          import('./service-providers/service-providers.module').then(
            (m) => m.ServiceProvidersModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      },
      {
        path: 'managers',
        loadChildren: () =>
          import('./managers/managers.module').then((m) => m.ManagersModule),
      },
      {
        path: 'shippers',
        loadChildren: () =>
          import('./shippers/shippers.module').then((m) => m.ShippersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
