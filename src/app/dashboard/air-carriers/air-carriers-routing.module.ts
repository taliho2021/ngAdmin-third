import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirCarriersComponent } from './air-carriers.component';

const routes: Routes = [{ path: '', component: AirCarriersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirCarriersRoutingModule { }
