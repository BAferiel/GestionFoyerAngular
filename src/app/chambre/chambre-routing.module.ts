import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListChambreComponent} from "./list-chambre/list-chambre.component";
import {AddChambreComponent} from "./add-chambre/add-chambre.component";

const routes: Routes = [

  {
    path: '',
    component: ListChambreComponent,
  },
  {
    path: 'addChambre',
    component: AddChambreComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChambreRoutingModule { }
