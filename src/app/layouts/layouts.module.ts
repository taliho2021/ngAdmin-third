import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { VerticalComponent } from './vertical/vertical.component';
import { HorizontalComponent } from './horizontal/horizontal.component';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
    TopbarComponent,
    VerticalComponent,
    HorizontalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
