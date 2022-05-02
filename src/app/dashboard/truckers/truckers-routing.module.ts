import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruckersComponent } from './truckers.component';

const routes: Routes = [{ path: '', component: TruckersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TruckersRoutingModule { }
