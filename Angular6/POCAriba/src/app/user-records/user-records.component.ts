import { Component, OnInit } from '@angular/core';
import { User } from '../user-info/user.model';
import { UserRecordService } from '../user-record.service';

@Component({
  selector: 'app-user-records',
  templateUrl: './user-records.component.html',
  styleUrls: ['./user-records.component.scss']
})
export class UserRecordsComponent implements OnInit {
  
  user: User;
  showDetails:boolean=false;
  showSuccess:boolean=false;

  constructor(private userDataService: UserRecordService){

  }

  ngOnInit() {
    this.showDetails = false;
    this.showSuccess = false;
  }

  displayedColumns: string[] = ['title', 'name', 'city', 'contact'];
  dataSource = this.userDataService.getData();

  setSelectedRow(user: User){
    console.log(user.name);
    this.user = user;
    this.showDetails=true;
    this.showSuccess = false;
  }

  homePage() {
    console.log("homePage calling");
    this.showDetails = false;
    this.showSuccess = false;
  }

  successPage(){
    console.log("Success Page");
    this.showSuccess = true;
  }

}