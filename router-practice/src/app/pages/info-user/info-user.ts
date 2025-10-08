import { Component } from '@angular/core';
import { ModeloUsuario } from '../../models/model-usuario';
import { UsuarioService } from '../../services/usuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-user',
  imports: [],
  templateUrl: './info-user.html',
  styleUrl: './info-user.css'
})
export class InfoUser {
  selectedUser:ModeloUsuario | undefined;

  constructor(private route:ActivatedRoute,public UsuarioService:UsuarioService){
    const userName = route.snapshot.params["userName"];
    this.selectedUser = UsuarioService.getUser(userName);
  }
}
