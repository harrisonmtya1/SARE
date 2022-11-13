import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navegar(componente: String) {
    switch (componente) {
      case 'paciente':
        this.route.navigate([`/pacientes/${componente}`])
        break;
      case 'examen':
        this.route.navigate([`/examenes/${componente}`])
        break;
      case 'admin':
        this.route.navigate([`/administracion/${componente}`])
        break;

    }

  }

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
