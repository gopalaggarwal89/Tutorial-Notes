import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SecondProject';

  constructor(svc : TestService,private http : HttpClient){
    
    svc.printToConsole("Logging");
  }

  ngOnInit(){

    let obs = this.http.get('http://api.github.com/users/gopalaggarwal89');
    obs.subscribe((response) => {
      console.log('Got the response');
      console.log(response);
    }
    )
  }

}
