import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { AddreservationComponent } from './addreservation/addreservation.component';
import { UpdatereservationComponent } from './updatereservation/updatereservation.component';
import { FormsModule } from '@angular/forms';
import { AffichreservasationComponent } from './affichreservasation/affichreservasation.component';
import { AjoutAndGetChambreComponent } from './ajout-and-get-chambre/ajout-and-get-chambre.component';
import { CoreModule } from "../module/core/core.module";


@NgModule({
    declarations: [
        AddreservationComponent,
        UpdatereservationComponent,
        AffichreservasationComponent,
        AjoutAndGetChambreComponent
    ],
    imports: [
        CommonModule,
        ReservationRoutingModule,
        FormsModule,
        CoreModule,
    ]
})
export class ReservationModule { }
