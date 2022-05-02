import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpressOperatorsRoutingModule } from './express-operators-routing.module';
import { ExpressOperatorsComponent } from './express-operators.component';


@NgModule({
  declarations: [
    ExpressOperatorsComponent
  ],
  imports: [
    CommonModule,
    ExpressOperatorsRoutingModule
  ]
})
export class ExpressOperatorsModule { }
