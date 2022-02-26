import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../interfaces/cliente.interface';
import { ClienteService } from '../services/cliente.service';

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
        this.router.navigate(['/clientes']);
      });
  }

}
