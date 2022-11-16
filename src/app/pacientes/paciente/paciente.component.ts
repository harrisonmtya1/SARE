import { Component, OnInit } from '@angular/core';

interface ciudad{
  name:String,
  code:String
}

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  genero:string ="";
  fecha: Date | undefined ;
 

  cities: ciudad[]=[{name:"CC", code:"CC"},{name:"TI",code:"TI"}]

  pacientes=[
    {
      nombre:"Carlos Arturo Benjumea",
      documento:"264899",
      genero:"M",
      nacimiento:"1987/10/01",
      eps:"SURA",
      medicamento:"Acetaminofen"
    },
    {
      nombre:"Carlos Arturo Benjumea",
      documento:"264899",
      genero:"M",
      nacimiento:"1987/10/01",
      eps:"SURA",
      medicamento:"Acetaminofen"
    }]

  constructor() { }

  ngOnInit(): void {
  }

}
