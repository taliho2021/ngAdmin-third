import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirCarriersRoutingModule } from './air-carriers-routing.module';
import { AirCarriersComponent } from './air-carriers.component';


@NgModule({
  declarations: [
    AirCarriersComponent
  ],
  imports: [
    CommonModule,
    AirCarriersRoutingModule
  ]
})
export class AirCarriersModule { }
