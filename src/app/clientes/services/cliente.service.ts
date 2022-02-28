import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";

import { catchError, Observable, throwError } from 'rxjs';

import Swal from 'sweetalert2';

import { Cliente } from '../interfaces/cliente.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = environment.baseUrl;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.urlEndPoint}/clientes`);
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/clientes/${id}`)
      .pipe(
        catchError(e => {
          this.router.navigate(['/clientes']);
          Swal.fire('Error al obtener cliente', e.error.mensaje, 'error');
          return throwError(() => e);
        })
      );
  }

  guardar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.urlEndPoint}/clientes`, cliente, { headers: this.httpHeaders })
      .pipe(
        catchError(e => {
          Swal.fire('Error al crear al cliente', e.error.error, 'error');
          return throwError(() => e);
        })
      );
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.urlEndPoint}/clientes/${cliente.id}`, cliente, { headers: this.httpHeaders })
      .pipe(
        catchError(e => {
          Swal.fire('Error al editar al cliente', e.error.error, 'error');
          return throwError(() => e);
        })
      );
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.urlEndPoint}/clientes/${id}`, { headers: this.httpHeaders })
      .pipe(
        catchError(e => {
          Swal.fire('Error al eliminar el cliente', e.error.error, 'error');
          return throwError(() => e);
        })
      );
  }
}
