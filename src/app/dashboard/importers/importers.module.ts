import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportersRoutingModule } from './importers-routing.module';
import { ImportersComponent } from './importers.component';


@NgModule({
  declarations: [
    ImportersComponent
  ],
  imports: [
    CommonModule,
    ImportersRoutingModule
  ]
})
export class ImportersModule { }
