import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CfsTerminalOperRoutingModule } from './cfs-terminal-oper-routing.module';
import { CfsTerminalOperComponent } from './cfs-terminal-oper.component';


@NgModule({
  declarations: [
    CfsTerminalOperComponent
  ],
  imports: [
    CommonModule,
    CfsTerminalOperRoutingModule
  ]
})
export class CfsTerminalOperModule { }
