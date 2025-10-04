import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Child } from './components/child/child';

@Component({
  selector: 'app-root',
  imports: [NgClass, CommonModule, ReactiveFormsModule, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // isHighlighted:boolean = false;
  // isItalic:boolean = false;

  // cambioHighlight(){
  //   this.isHighlighted = !this.isHighlighted
  // }

  //  cambioItalic(){
  //   this.isItalic = !this.isItalic
  // }
}
