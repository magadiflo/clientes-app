import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../interfaces/cliente.interface';
import { ClienteService } from '../services/cliente.service';

import  Swal  from "sweetalert2";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  titulo: string = 'Nuevo cliente';
  cliente: Cliente = { nombre: '', apellido: '', email: '' };

  constructor(
    private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardar(): void {
    this.clienteService.guardar(this.cliente)
      .subscribe(cliente => {
        console.log('Cliente creado: ', cliente);
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: `Cliente: ${cliente.nombre} ${cliente.apellido}`
        });
        this.router.navigate(['/clientes']);
      });
  }

}
