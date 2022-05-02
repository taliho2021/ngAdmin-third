import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CfsTerminalOperComponent } from './cfs-terminal-oper.component';

const routes: Routes = [{ path: '', component: CfsTerminalOperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CfsTerminalOperRoutingModule { }
