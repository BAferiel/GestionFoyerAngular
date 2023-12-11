import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllfoyerComponent} from "./allfoyer/allfoyer.component";
import {AddfoyerComponent} from "./addfoyer/addfoyer.component";
import {UpdatefoyerComponent} from "./updatefoyer/updatefoyer.component";

const routes: Routes = [
  {
    path: '', component: AllfoyerComponent,
  },
  {
    path: 'addFoyer', component: AddfoyerComponent,
  },
  {
    path: 'updateFoyer', component:UpdatefoyerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoyerRoutingModule { }
