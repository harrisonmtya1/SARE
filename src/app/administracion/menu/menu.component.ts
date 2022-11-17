import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    constructor() { }

    items!: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Usuarios',
                icon: 'pi pi-user',
                items: [{
                    label: 'Nuevo',
                    icon: 'pi pi-fw pi-plus',
                },
                { label: 'Eliminar' },
                { label: 'Modificar' },
                { label: 'Listar Usuarios' }
               
                ]
            },
            {
                label: 'Perfiles',
                icon: 'pi pi-users',
                items: [{
                    label: 'Nuevo',
                    icon: 'pi pi-fw pi-plus',
                },
                { label: 'Eliminar' },
                { label: 'Modificar' },
                { label: 'Listar Perfiles' },
                { label: 'Usuarios - Perfiles' }
            ]

            },
            {
                label: 'Configuracion',
                icon: 'pi pi-wrench',
                items: [
                    { label: 'Configuracion del sistema' },
                    { label: 'Maestro de examenes' }
                ]
            },
            {
                label: 'Salir',
                icon: 'pi pi-home',

            }
        ];
    }

}
