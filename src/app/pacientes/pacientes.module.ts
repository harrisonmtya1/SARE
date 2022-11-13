import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesRouting } from './pacientes.routing';
import { PacienteComponent } from './paciente/paciente.component';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PacienteComponent
  ],
  imports: [
    CommonModule,
    PacientesRouting,
    InputTextModule,
    ButtonModule,
    FormsModule
  ]
})
export class PacientesModule { }
