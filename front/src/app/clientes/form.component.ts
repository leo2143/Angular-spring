import { Cliente } from './cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  cliente: Cliente = new Cliente()
  titulo: string = "Crear Cliente"
  constructor(){}
  ngOnInit() {
  }

  public create(): void{
    console.log("Clicked!")
    console.log(this.cliente)
  }
}

