import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportersRoutingModule } from './exporters-routing.module';
import { ExportersComponent } from './exporters.component';


@NgModule({
  declarations: [
    ExportersComponent
  ],
  imports: [
    CommonModule,
    ExportersRoutingModule
  ]
})
export class ExportersModule { }
