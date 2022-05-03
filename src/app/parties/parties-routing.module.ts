import { RouterModule, Routes } from '@angular/router';

import { DomesticComponent } from './domestic/domestic.component';
import { ForeignComponent } from './foreign/foreign.component';
import { NgModule } from '@angular/core';
import { PartiesComponent } from './parties.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import { TruckersComponent } from './truckers/truckers.component';

const routes: Routes = [
  {
    path: '',
    component: PartiesComponent,
    children: [
      { path: 'domestic', component: DomesticComponent },
      { path: 'foreign', component: ForeignComponent },
      { path: 'service-providers', component: ServiceProvidersComponent },
      { path: 'truckers', component: TruckersComponent },
    ],
  },
];

@NgModule({
  declarations: [
    PartiesComponent,
    DomesticComponent,
    ForeignComponent,
    TruckersComponent,
    ServiceProvidersComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartiesRoutingModule {}
