import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<any> = []
  constructor(private UserService: UserService) { }
  loading = true;
  ngOnInit(): void {
    let that = this;
    this.UserService.getUsers().subscribe((data) => {
      console.log(data);
      setTimeout(() => {
        that.users = data
        that.loading = false
      }, 1000);
    })
  }

}
