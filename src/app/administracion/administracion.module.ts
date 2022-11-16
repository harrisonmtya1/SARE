import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { MenuComponent } from './menu/menu.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrincipalComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    MegaMenuModule,
    FormsModule
  ]
})
export class AdministracionModule { }
