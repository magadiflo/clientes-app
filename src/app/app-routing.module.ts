import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './clientes/cliente/cliente.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { FormComponent } from './clientes/form/form.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'nuevo', component: FormComponent },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
