import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShippersComponent } from './shippers.component';

const routes: Routes = [{ path: '', component: ShippersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippersRoutingModule { }
