import { Component, OnInit } from '@angular/core';
import { TaskApiService } from 'src/app/services/task-api.service';
import { UserService } from 'src/app/services/user.service';
import { TASK } from '../../module/task';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css'],
})
export class ListtaskComponent implements OnInit {
  loading = true;
  listTask: TASK[] = [];
  listUser: any = []
  constructor(private TaskApiService: TaskApiService, private UserService: UserService) {}

  ngOnInit(): void {
    let that = this
    this.TaskApiService.getTask().subscribe((data) => {
      console.log(data.tasks);
      this.listTask = data.tasks
      setTimeout(() => {
        that.loading = false
      }, 1000);
    })

    
  }
}
