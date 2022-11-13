import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"loginmenu",
    loadChildren: ()=> import('./share/share.module').then(m => m.ShareModule)
  },
  {
    path:"examenes",
    loadChildren: ()=> import('./examenes/examenes.module').then(m => m.ExamenesModule)
  },
  {
    path:"pacientes",
    loadChildren: ()=> import('./pacientes/pacientes.module').then(m => m.PacientesModule)
  },
  {
    path:"administracion",
    loadChildren: ()=> import('./administracion/administracion.module').then(m => m.AdministracionModule)
  },
  {
    path:'**',
    redirectTo:'loginmenu'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
