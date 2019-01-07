import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from 'src/app/test.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  userName: String;
  response: any;

  constructor(private svc : TestService,private http: HttpClient) { }

  ngOnInit() {
  }

  search(){
    this.http.get('https://api.github.com/users/'+this.userName)
    .subscribe((response) => {
      this.response = response;
      this.svc.printToConsole(this.response);
    })
  }

}
