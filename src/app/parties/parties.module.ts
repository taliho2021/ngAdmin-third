import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartiesRoutingModule } from './parties-routing.module';
import { PartiesComponent } from './parties.component';
import { DomesticComponent } from './domestic/domestic.component';
import { ForeignComponent } from './foreign/foreign.component';
import { TruckersComponent } from './truckers/truckers.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';


@NgModule({
  declarations: [
    PartiesComponent,
    DomesticComponent,
    ForeignComponent,
    TruckersComponent,
    ServiceProvidersComponent
  ],
  imports: [
    CommonModule,
    PartiesRoutingModule
  ]
})
export class PartiesModule { }
