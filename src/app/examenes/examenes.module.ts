import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamenesRouting } from './examenes.routing';
import { Routes } from '@angular/router';
import { ExamenComponent } from './examen/examen.component';


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
    ExamenesRouting
  ]
})
export class ExamenesModule { }
