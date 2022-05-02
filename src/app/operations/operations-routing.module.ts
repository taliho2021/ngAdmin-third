import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { OperationsComponent } from './operations.component';

const routes: Routes = [
  { path: '', component: OperationsComponent },
  {
    path: 'air-ams',
    loadChildren: () =>
      import('./air-ams/air-ams.module').then((m) => m.AirAmsModule),
  },
  {
    path: 'air-export',
    loadChildren: () =>
      import('./air-export/air-export.module').then((m) => m.AirExportModule),
  },
  {
    path: 'air-import',
    loadChildren: () =>
      import('./air-import/air-import.module').then((m) => m.AirImportModule),
  },
  {
    path: 'cmsq',
    loadChildren: () => import('./cmsq/cmsq.module').then((m) => m.CmsqModule),
  },
  {
    path: 'customs-brokerage',
    loadChildren: () =>
      import('./customs-brokerage/customs-brokerage.module').then(
        (m) => m.CustomsBrokerageModule
      ),
  },
  {
    path: 'express-operators',
    loadChildren: () =>
      import('./express-operators/express-operators.module').then(
        (m) => m.ExpressOperatorsModule
      ),
  },
  {
    path: 'isf',
    loadChildren: () => import('./isf/isf.module').then((m) => m.IsfModule),
  },
  {
    path: 'ocean-export',
    loadChildren: () =>
      import('./ocean-export/ocean-export.module').then(
        (m) => m.OceanExportModule
      ),
  },
  {
    path: 'ocean-import',
    loadChildren: () =>
      import('./ocean-import/ocean-import.module').then(
        (m) => m.OceanImportModule
      ),
  },
  {
    path: 'sea-ams',
    loadChildren: () =>
      import('./sea-ams/sea-ams.module').then((m) => m.SeaAmsModule),
  },
  {
    path: 'track-and-trace',
    loadChildren: () =>
      import('./track-and-trace/track-and-trace.module').then(
        (m) => m.TrackAndTraceModule
      ),
  },
  {
    path: 'trucking',
    loadChildren: () =>
      import('./trucking/trucking.module').then((m) => m.TruckingModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperationsRoutingModule {}
