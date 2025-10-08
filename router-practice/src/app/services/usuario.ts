import { Injectable } from '@angular/core';
import { ModeloUsuario } from '../models/model-usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios:ModeloUsuario[];

  constructor(){
    this.usuarios = [
      {
        nombre:"Sergio",
        apellido:"Gomez",
        edad:22
      },
      {
        nombre:"Mario",
        apellido:"Gomez",
        edad:23
      },
      {
        nombre:"Angel",
        apellido:"Gomez",
        edad:16
      }
    ]
  }

  getUser(nombre:string): ModeloUsuario | undefined{
    return this.usuarios.find((user) => user.nombre === nombre);
  }


}
