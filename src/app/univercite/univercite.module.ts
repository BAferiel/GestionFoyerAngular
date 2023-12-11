import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniverciteRoutingModule } from './univercite-routing.module';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { FormsModule } from '@angular/forms';
import {CoreModule} from "../module/core/core.module";



@NgModule({
  declarations: [
    ListUniversiteComponent,
    AddUniversiteComponent,
  ],
  imports: [
    CommonModule,
    UniverciteRoutingModule,
    FormsModule,
    CoreModule
  ]
})
export class UniverciteModule { }
