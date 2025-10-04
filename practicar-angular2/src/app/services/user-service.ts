import { Injectable } from '@angular/core';


export interface User{
  name:string;
  email:string;
  loggedIn:boolean;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user:User;

  constructor(){
    this.user = {
      name:"Sergio",
      email:"sergio@gmail.com",
      loggedIn:false
    }
  }

  loginUser(name: string, email: string){
        this.user.name = name;
        this.user.email = email;
        this.user.loggedIn = true;
    }
  
}


