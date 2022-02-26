import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Cliente } from '../interfaces/cliente.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.urlEndPoint}/clientes`);
  }
}
