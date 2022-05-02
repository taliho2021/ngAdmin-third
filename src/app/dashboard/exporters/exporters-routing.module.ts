import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportersComponent } from './exporters.component';

const routes: Routes = [{ path: '', component: ExportersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportersRoutingModule { }
