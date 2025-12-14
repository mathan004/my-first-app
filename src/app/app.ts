import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './helight';
import {ReversePipe} from './reverse-pipe'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,HighlightDirective,ReversePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title='my-first-app';

  getTitle(){
    return this.title;
  }
  //properties for image binding
  imageUrl='https://angular.io/assets/images/logos/angular/angular.png';
  imageAlt='Angular Logo';
  
  //safe navigation operator
  user: any = {
    name: 'John Doe',
    address: {
      street: '123 Main St',
      city: 'Anytown'
    }
  };

  //event binding

  clickcount=0;
  clickme(){
    this.clickcount++;
  }
  //Structural Directives

  //ng for
  movies=["Zootopia","x man","bat man"]

  //ng if
  show=true
  //ng_class
  color=true

  //pipes

  //date
  toDate=Date()
  //slice
  topic='Angular topic'
  //currency
  price=350
  //key value
  person={
    age:21,
    name:'angular'
  }









  



}
