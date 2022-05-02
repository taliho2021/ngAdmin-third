import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForwardersComponent } from './forwarders.component';

const routes: Routes = [{ path: '', component: ForwardersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForwardersRoutingModule { }
