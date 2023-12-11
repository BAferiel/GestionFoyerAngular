import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AfficheBlocComponent} from "./affiche-bloc/affiche-bloc.component";
import {AjoutBlocComponent} from "./ajout-bloc/ajout-bloc.component";
import {ModifBlocComponent} from "./modif-bloc/modif-bloc.component";

const routes: Routes = [

  {
    path:'', component: AfficheBlocComponent,
  },
  {
    path:'addBloc', component: AjoutBlocComponent,
  },
  {
    path:'updateBloc/:idBloc', component: ModifBlocComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocRoutingModule { }
