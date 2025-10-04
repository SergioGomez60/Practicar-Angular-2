import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ɵInternalFormsSharedModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-child',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {

  // carForm: FormGroup;
  // marca:FormControl;
  // modelo:FormControl;
  // anyo:FormControl;

  // constructor(){
  //   this.marca = new FormControl("");
  //   this.modelo = new FormControl("");
  //   this.anyo = new FormControl("");

  //   this.carForm = new FormGroup({
  //     marca: this.marca,
  //     modelo: this.modelo,
  //     anyo: this.anyo
  //   })
  // }

  // enviarPelicula(){
  //   console.log(this.carForm.value);
  //   this.carForm.reset();
  // }

  // userForm:FormGroup;
  // username:FormControl;
  // email:FormControl;
  // age:FormControl;

  // constructor(){

  //     this.username = new FormControl("",Validators.required)
  //     this.email = new FormControl("",[Validators.required,Validators.email])
  //     this.age = new FormControl("",[Validators.required,Validators.max(100)])

  //     this.userForm = new FormGroup({
  //     username: this.username,
  //     email:this.email,
  //     age:this.age
  //   })
  // }

  userService = inject(UserService);
}
