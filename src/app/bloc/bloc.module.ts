import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocRoutingModule } from './bloc-routing.module';
import {AfficheBlocComponent} from "./affiche-bloc/affiche-bloc.component";
import {AjoutBlocComponent} from "./ajout-bloc/ajout-bloc.component";
import {ModifBlocComponent} from "./modif-bloc/modif-bloc.component";
import {CoreModule} from "../module/core/core.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AfficheBlocComponent,
    AjoutBlocComponent,
    ModifBlocComponent
  ],
  imports: [
    CommonModule,
    BlocRoutingModule,
    CoreModule,
      FormsModule
  ]
})
export class BlocModule { }
