import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CicleComponent } from './cicle/cicle.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormComponent } from './clientes/form.component'
import {FormsModule} from '@angular/forms'



const routes: Routes = [
  {path:"",redirectTo: '/clientes',pathMatch: 'full' },
  {path:"clientes", component: ClientesComponent  },
  {path:"cicle", component: CicleComponent },
  {path:"clientes/forms", component: FormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CicleComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
