import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing-intro';

  routes = [
    { linkName: 'Home' , url : 'home' },
    { linkName: 'Settings' , url : 'settings' }
  ];
}
