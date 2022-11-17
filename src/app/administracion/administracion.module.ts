import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from 'primeng/menubar';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrincipalComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MenubarModule,
    FormsModule
  ]
})
export class AdministracionModule { }
