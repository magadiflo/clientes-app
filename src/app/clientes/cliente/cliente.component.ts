import { Component, OnInit } from '@angular/core';

import { CLIENTES } from '../data/clientes.data';
import { Cliente } from '../interfaces/cliente.interface';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styles: [
  ]
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[] = CLIENTES;

  constructor() { }

  ngOnInit(): void {
  }

}
