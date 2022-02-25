import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { DirectivasComponent } from './directivas/directivas.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
