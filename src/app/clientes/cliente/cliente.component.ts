import { Component, OnInit } from '@angular/core';

import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../interfaces/cliente.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clienteService.getClientes()
      .subscribe((data: Cliente[]) => this.clientes = data);
  }

  eliminar(cliente: Cliente): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Se eliminará al cliente ${cliente.nombre} ${cliente.apellido}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.delete(cliente.id!)
          .subscribe(res => {  
            Swal.fire(
              '¡Eliminado!',
              `El cliente ${cliente.nombre} ${cliente.apellido} fue eliminado`,
              'success'
            );
            this.listarClientes();
          });
      }
    })
  }

}
