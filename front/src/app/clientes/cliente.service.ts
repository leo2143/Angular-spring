import { Injectable } from '@angular/core';
import { Clientes } from './clientes.Json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private UrlEndpoint: string = 'http://localhost:8080/api/clientes'
  constructor(private http: HttpClient) {}
  
  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.UrlEndpoint)
  }
}
