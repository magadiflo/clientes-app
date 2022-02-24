import { Component, OnInit } from '@angular/core';

interface Autor {
  nombre: string,
  apellido: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.css',
  ]
})
export class FooterComponent implements OnInit {

  autor: Autor = { nombre: 'Martín', apellido: 'Díaz' }
  anio: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
