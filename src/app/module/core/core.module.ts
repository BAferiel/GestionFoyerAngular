import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SidebarsComponent } from './sidebars/sidebars.component';



@NgModule({
  declarations: [NavbarComponent, SidebarsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, SidebarsComponent]
})
export class CoreModule { }
