import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { NotFountComponent } from './plantilla/not-fount/not-fount.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/inicio"

  },
 
 
  {
    path: 'seguridad',
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
    
    
  },
  {
    path: 'admin',
    loadChildren: () => import("./modulos/admin/admin.module").then (x => x.AdminModule)
    
  },

  //siempre este tendra que estar al final
  {
    path :"**",
    component:NotFountComponent
    
  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
