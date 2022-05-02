import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeaCarriersRoutingModule } from './sea-carriers-routing.module';
import { SeaCarriersComponent } from './sea-carriers.component';


@NgModule({
  declarations: [
    SeaCarriersComponent
  ],
  imports: [
    CommonModule,
    SeaCarriersRoutingModule
  ]
})
export class SeaCarriersModule { }
