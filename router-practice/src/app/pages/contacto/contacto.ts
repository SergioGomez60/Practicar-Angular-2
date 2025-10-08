import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacto',
  imports: [RouterLink],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  constructor(public usuarios:UsuarioService){
    
  }


}
