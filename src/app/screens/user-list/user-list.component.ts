import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe((data) => {
      console.log(data);
      
    })
  }

}
