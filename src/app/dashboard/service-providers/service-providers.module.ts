import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceProvidersRoutingModule } from './service-providers-routing.module';
import { ServiceProvidersComponent } from './service-providers.component';


@NgModule({
  declarations: [
    ServiceProvidersComponent
  ],
  imports: [
    CommonModule,
    ServiceProvidersRoutingModule
  ]
})
export class ServiceProvidersModule { }
