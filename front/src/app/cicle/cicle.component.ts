import { Component } from '@angular/core';

@Component({
  selector: 'app-cicle',
  templateUrl: './cicle.component.html',
  styleUrls: ['./cicle.component.css']
})
export class CicleComponent {

  listaCursos:string[] = ["TypeScript","Java SE","Docker","Jenkins","C#","PHP"]
  habilitar : boolean = true

setHabilitar(){
this.habilitar = (this.habilitar == true)? false : true;

}

}
