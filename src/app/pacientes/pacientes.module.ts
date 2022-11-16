import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesRouting } from './pacientes.routing';
import { PacienteComponent } from './paciente/paciente.component';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    PacienteComponent
  ],
  imports: [
    CommonModule,
    PacientesRouting,
    InputTextModule,
    ButtonModule,
    FormsModule,
    RadioButtonModule,
    CalendarModule,
    DropdownModule,
    TableModule
  ]
})
export class PacientesModule { }
