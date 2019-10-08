import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() onCancel = new EventEmitter();

  backButton() {
    console.log("Call user-info back")
    this.onCancel.emit();
  }
}