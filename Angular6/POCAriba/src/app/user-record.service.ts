import { Injectable } from '@angular/core';
import { User } from './user-info/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRecordService {

  constructor() { }


  getData(): User[]{
return [
  {title: "Mr.", name: 'User01', city: "Bangalore", contact: 321321313},
  {title: "Mr.", name: 'User02', city: "Bangalore", contact: 321321313},
  {title: "Mr.", name: 'User03', city: "Bangalore", contact: 321321313},
  {title: "Mr.", name: 'User04', city: "Bangalore", contact: 321321313},
];
  }
}
