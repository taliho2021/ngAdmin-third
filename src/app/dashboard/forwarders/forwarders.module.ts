import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForwardersRoutingModule } from './forwarders-routing.module';
import { ForwardersComponent } from './forwarders.component';


@NgModule({
  declarations: [
    ForwardersComponent
  ],
  imports: [
    CommonModule,
    ForwardersRoutingModule
  ]
})
export class ForwardersModule { }
