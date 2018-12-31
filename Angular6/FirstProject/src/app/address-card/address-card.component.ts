import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: User;

  isCollapsed: boolean = true;
  buttonText: String = "Show";
  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      this.buttonText = "Show"
    } else {
      this.buttonText = "Hide";
    }
  }

}
