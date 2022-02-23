import { Component, OnInit } from '@angular/core';
import { TaskApiService } from 'src/app/services/task-api.service';
import { UserService } from 'src/app/services/user.service';
import { TASK } from '../../module/task';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css'],
})
export class ListtaskComponent implements OnInit {
  loading = true;
  listTask: TASK[] = [];
  listUser: any = []
  constructor(private TaskApiService: TaskApiService, private UserService: UserService, private AuthApiService: AuthApiService) {}
  isCheck = false
  ngOnInit(): void {
    this.AuthApiService.getUserLocal().subscribe((res) => {
      const {user} = res;
      if(user.role === "admin"){
        this.isCheck = true
      }
    })
    let that = this
    this.TaskApiService.getTask().subscribe((data) => {
      console.log(data.tasks);
      this.listTask = data.tasks
      setTimeout(() => {
        that.loading = false
      }, 1000);
    })
  }
  remove(id: any) {
    if(window.confirm("Bạn có muốn xóa không")){
      let that = this
      this.TaskApiService.deleteTask(id).subscribe((data) => {
        console.log(data);
        setTimeout(() => {
          that.loading = false
        }, 1000);
      })
      this.listTask = this.listTask.filter((item) => item._id !== id)
    }
  }

}
