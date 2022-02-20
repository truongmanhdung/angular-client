import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskApiService } from 'src/app/services/task-api.service';
import { TASK } from '../../module/task';
import { UserService } from '../../services/user.service';
import { ProjectApiService } from '../../services/project-api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.css']
})
export class TaskeditComponent implements OnInit {

  constructor(
    private TaskApiService: TaskApiService,
    private router: Router,
    private UserService: UserService,
    private ProjectApiService: ProjectApiService,
    private route: ActivatedRoute
  ) {}
    
  listUser: Array<any> = [];
  listProject: Array<any> = [];
  listUserFilter: Array<any> = [];
  watcher: Array<any> = [];
  taskEdit: any = {}
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.TaskApiService.getOneTask(id).subscribe((data) => {
        console.log(data);
        
        this.taskEdit =  data.task
        this.watcher = data.task.watcher
      })
    }

    this.UserService.getUsers().subscribe((data) => {
      this.listUser = data;
      this.listUserFilter = data
    });
    this.ProjectApiService.getProject().subscribe((data) => {
      this.listProject = data.Projects;
    });
  }
  checkAss = false;
  search = '';
  onAddUser(user: any) {
    if (this.checkAss) {
      this.watcher.unshift({
        userId: user
      });
      this.checkAss = false;
    } else {
      this.watcher.push({ userId: user });
    }
    this.search = '';
  }

  onRemoveAss() {
    this.watcher.shift();
    this.checkAss = true
  }

  onRemoveWatcher(id: String) {
    this.watcher = this.watcher.filter((item) => item.userId._id !== id)
  }
  filter(e: any) {
    this.watcher.forEach((item) => {
      this.listUser = this.listUser.filter(
        (user: any) => user._id !== item.userId._id
      );
    });
    this.search = e.target.value;
    if (e.target.value !== '') {
      this.listUserFilter = this.listUser.filter((user: any) =>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }
  }

  submitAddTaskForm(f: NgForm) {
    const watcherId: any = [];
    this.watcher.forEach((item) => {
      watcherId.push({
        userId: item.userId._id,
      });
    });
    const task = {
        nameTask: f.value.nameTask,
        desc: f.value.desc,
        projectId: f.value.projectId,
        watcher: watcherId,
        startDate: f.value.startDate,
    }
    console.log('====================================');
    console.log(task);
    console.log('====================================');
    this.TaskApiService.putTask(this.taskEdit._id, task).subscribe((data) => {
      if (data.success) {
        this.router.navigate(['list-task']);
      }
    });
  }
}
