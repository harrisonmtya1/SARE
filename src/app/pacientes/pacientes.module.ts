import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesRouting } from './pacientes.routing';
import { PacienteComponent } from './paciente/paciente.component';



@NgModule({
  declarations: [
    PacienteComponent
  ],
  imports: [
    CommonModule,
    PacientesRouting
  ]
})
export class PacientesModule { }
