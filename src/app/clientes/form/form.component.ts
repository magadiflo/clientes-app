import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Cliente } from '../interfaces/cliente.interface';
import { ClienteService } from '../services/cliente.service';

import Swal from "sweetalert2";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  titulo: string = 'Nuevo cliente';
  cliente: Cliente = { nombre: '', apellido: '', email: '' };
  errores: string[] = []

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void {
    this.activatedRoute.params
      .subscribe(({ id }) => {
        if (id) {
          this.clienteService.getCliente(id)
            .subscribe(cliente => this.cliente = cliente);
        }
      });
  }

  guardar(): void {
    this.clienteService.guardar(this.cliente)
      .subscribe({
        next: cliente => {
          Swal.fire({ icon: "success", title: "Registro exitoso", text: `Cliente: ${cliente.nombre} ${cliente.apellido}` });
          this.router.navigate(['/clientes']);
        },
        error: err => {
          this.errores = err.error.errors as string[];
          console.log('Código del error desde el backend ' + err.status);  
          console.log(this.errores);
        }
      });
  }

  actualizar(): void {
    this.clienteService.update(this.cliente)
      .subscribe({
        next: cliente => {
          Swal.fire({ icon: "success", title: "Actualización exitosa", text: `Cliente: ${cliente.nombre} ${cliente.apellido}` });
          this.router.navigate(['/clientes']);
        },
        error: err => {
          this.errores = err.error.errors as string[];
          console.log('Código del error desde el backend ' + err.status);  
          console.log(this.errores);
        }
      });
  }

}
