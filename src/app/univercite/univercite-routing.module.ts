import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';

const routes: Routes = [
  {
    path:'',
    component:ListUniversiteComponent
  },
  {
    path:'adduniversite',
    component:AddUniversiteComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniverciteRoutingModule { }
