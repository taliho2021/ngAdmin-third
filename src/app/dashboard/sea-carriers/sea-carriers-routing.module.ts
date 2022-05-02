import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeaCarriersComponent } from './sea-carriers.component';

const routes: Routes = [{ path: '', component: SeaCarriersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeaCarriersRoutingModule { }
