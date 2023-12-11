import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoyerRoutingModule } from './foyer-routing.module';
import {AddfoyerComponent} from "./addfoyer/addfoyer.component";
import {AllfoyerComponent} from "./allfoyer/allfoyer.component";
import {UpdatefoyerComponent} from "./updatefoyer/updatefoyer.component";
import {RecherchePipe} from "./Search/recherche.pipe";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "../module/core/core.module";


@NgModule({
  declarations: [
      UpdatefoyerComponent,
      AddfoyerComponent,
      AllfoyerComponent,
      RecherchePipe,
  ],
    imports: [
        CommonModule,
        FoyerRoutingModule,
        FormsModule,
        CoreModule
    ]
})
export class FoyerModule { }
