import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListUserComponent } from './list-user/list-user.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  { path: 'users', component: ListUserComponent },
  { path: 'editUser/:id', component: EdituserComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
