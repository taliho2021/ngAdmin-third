import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpressOperatorsComponent } from './express-operators.component';

const routes: Routes = [{ path: '', component: ExpressOperatorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpressOperatorsRoutingModule { }
