import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;

  text: String;

  constructor(){

    this.user = new User();

    this.user.name = "Foo",
    this.user.title= 'Software Developer',
    this.user.address= '1234 Main city, state, street - 43243',
    this.user.phone= [
      '123-123-1234',
      '123-123-9876'
    ]
  };
}
