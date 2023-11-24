import { Component } from '@angular/core';
import{Cliente} from './cliente'
import { ClienteService } from './cliente.service';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  cliente:  Cliente[];
  habilitar : boolean = true

setHabilitar(){
this.habilitar = (this.habilitar == true)? false : true;

}
constructor(private clienteService: ClienteService){}

ngOnInit(){
   this.clienteService.getClientes().subscribe(
    cliente => this.cliente = cliente
   )
  }

}
