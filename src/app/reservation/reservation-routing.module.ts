import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficheBlocComponent } from '../bloc/affiche-bloc/affiche-bloc.component';
import { AjoutAndGetChambreComponent } from './ajout-and-get-chambre/ajout-and-get-chambre.component';
import { AffichreservasationComponent } from './affichreservasation/affichreservasation.component';
import { UpdatereservationComponent } from './updatereservation/updatereservation.component';

const routes: Routes = [
  {path:'listreservation',component:AffichreservasationComponent},
  {path:'addreservation',component:AjoutAndGetChambreComponent},
  {path:'updatereservation/:id',component:UpdatereservationComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
