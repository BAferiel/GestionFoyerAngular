import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListUserComponent } from './list-user/list-user.component';
import { CoreModule } from "../core/core.module";
import { EdituserComponent } from './edituser/edituser.component';
import { FormsModule } from '@angular/forms';
import {SidebarAdminComponent} from "./sidebar-admin/sidebar-admin.component";

@NgModule({
  declarations: [
    ListUserComponent,
    EdituserComponent,
    SidebarAdminComponent
  ],
  exports: [
    SidebarAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    FormsModule
  ]
})
export class AdminModule { }
