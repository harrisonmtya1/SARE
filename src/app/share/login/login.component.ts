import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario{
  nombre: string,
  clave:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario={
    nombre:"",
    clave:""
  }

  

  ingresar(){
      if(this.usuario.nombre=="admin" && this.usuario.clave=="admin"){
           console.log("ha ingresado")
           this.router.navigate(['/loginmenu/menu'])
      }


  }

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

}
