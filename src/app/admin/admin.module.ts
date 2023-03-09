import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListComponent } from './list/list.component'
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    LoginComponent,
    ListComponent
    
  ]
})
export class AdminModule { }
