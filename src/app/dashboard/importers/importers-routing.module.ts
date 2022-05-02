import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportersComponent } from './importers.component';

const routes: Routes = [{ path: '', component: ImportersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportersRoutingModule { }
