import {Component, OnInit} from '@angular/core';
import {Service} from '../service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  // grabs list of users from DB using service
  userList;

  constructor(private service: Service) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers = () => {
    return this.service
      .getUsers()
      .subscribe(res => (this.userList = res));
  }
  deleteUser = data => this.service.deleteUser(data);
}
