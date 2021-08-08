import { Component } from '@angular/core';
import { Persona } from '../interfaces/usuario.interfaces';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent{

  usuarios: Persona []=[];


  usuario: Persona={
    tipoDocumento:'',
    numeroDocumento:0,
    nombres:'',
    apellidos:'',
    email:'',
    telefono:0,
    password: ''


  }

agregar(){
  if(this.usuario.nombres.trim().length==0){return;}

  console.log(this.usuario);

  this.usuarios.push(this.usuario);
  this.usuario={
    tipoDocumento:'',
    numeroDocumento:0,
    nombres:'',
    apellidos:'',
    email:'',
    telefono:0,
    password: ''


  }
}

  

}
