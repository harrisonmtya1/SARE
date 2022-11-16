import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenesRouting } from './examenes.routing';
import { Routes } from '@angular/router';
import { ExamenComponent } from './examen/examen.component';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';


const routes:Routes =[
  {
    path:'',
    children:[
      {
        path:'examenes',
        component: ExamenComponent
      }
    ]
  }

]

@NgModule({
  declarations: [
     ExamenComponent
  ],
  imports: [
    CommonModule,
    ExamenesRouting,
    InputTextModule,
    ButtonModule,
    FormsModule,
    RadioButtonModule,
    CalendarModule,
    DropdownModule,
    TableModule
  ]
})
export class ExamenesModule { }
