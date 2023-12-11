import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChambreRoutingModule } from './chambre-routing.module';
import { ListChambreComponent } from './list-chambre/list-chambre.component';
import {CoreModule} from "../module/core/core.module";
import {AppModule} from "../app.module";
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListChambreComponent,
    AddChambreComponent,
  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class ChambreModule { }
