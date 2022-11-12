import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { ShareRouting } from './share.routing';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    MenuComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ShareRouting,
    InputTextModule,
    ButtonModule
  ]
})
export class ShareModule { }
