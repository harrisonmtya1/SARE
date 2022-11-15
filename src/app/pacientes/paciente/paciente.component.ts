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
 

  cities: ciudad[]=[{name:"CC", code:"CC"}]

  constructor() { }

  ngOnInit(): void {
  }

}
