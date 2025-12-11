import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
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



}
