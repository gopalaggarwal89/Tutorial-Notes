import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input('user') user: User;
  @Output() onBack = new EventEmitter();
  @Output() onNext = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  backButton() {
    console.log("Call user-info back");
    this.onBack.emit();
  }

  nextButton(){
    console.log("Call user-info Next");
    this.onNext.emit();
  }
}
