import { Cliente } from './cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

  cliente: Cliente = new Cliente()
  titulo: string = "Crear Cliente"
  constructor(private clienteService: ClienteService,private router:Router){}
  ngOnInit() {
  }
  //este metodo se suscribe al service el cual tiene la logica de creacion que llama al backend
  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    )
  }
}

