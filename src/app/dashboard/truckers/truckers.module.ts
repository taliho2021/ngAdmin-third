import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TruckersRoutingModule } from './truckers-routing.module';
import { TruckersComponent } from './truckers.component';


@NgModule({
  declarations: [
    TruckersComponent
  ],
  imports: [
    CommonModule,
    TruckersRoutingModule
  ]
})
export class TruckersModule { }
