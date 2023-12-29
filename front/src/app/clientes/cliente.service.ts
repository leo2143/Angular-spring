import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private UrlEndpoint: string = 'http://localhost:8080/api/clientes'
  private httpHeaders = new HttpHeaders({'content-type':'application/json'})

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.UrlEndpoint)
  }

   create(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.UrlEndpoint,cliente,{headers:this.httpHeaders})
  }
}
