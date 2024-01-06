import { Cliente } from './cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


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
      response => {
        this.router.navigate(['/clientes']);
        Swal.fire({
          title: 'Nuevo cliente creado con éxito!',
          text: `El cliente ${response} ha sido creado.`,
          icon: 'success',
          confirmButtonColor: '#C64EB2',
          confirmButtonText: 'Aceptar'
        });
      },
      error => {
        Swal.fire({
          title: 'Hubo un error al crear la persona',
          text: ``,
          icon: 'error',
          confirmButtonText: 'Cool'

        });

      }
    )
  }
}

