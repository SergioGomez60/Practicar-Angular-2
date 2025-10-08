import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from '../../models/model-usuario';
import { UsuarioService } from '../../services/usuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-user',
  imports: [],
  templateUrl: './info-user.html',
  styleUrl: './info-user.css'
})
export class InfoUser implements OnInit {
  selectedUser:ModeloUsuario | undefined;

 constructor(private route:ActivatedRoute,public UsuarioService:UsuarioService){
   
 }

  ngOnInit(): void {
    const userName = this.route.snapshot.params["userName"];
    this.selectedUser = this.UsuarioService.getUser(userName);
  }
}
