import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message: String = "Hello";

  dateVal: String ;

  constructor() { 

    setInterval(() => {this.updatedTime() },1000);
  }

  ngOnInit() {
  }

  updatedTime() {
    let currentDate = new Date();
    this.dateVal = currentDate.toDateString() + ' ' + currentDate.toTimeString();
  }

}
