import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../../services/task-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ProjectApiService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css'],
})
export class TaskcreateComponent implements OnInit {
  constructor(
    private TaskApiService: TaskApiService,
    private router: Router,
    private UserService: UserService,
    private ProjectApiService: ProjectApiService
  ) {}
  listUser: Array<any> = [];
  listProject: Array<any> = [];
  listUserFilter: Array<any> = [];
  watcher: Array<any> = [];
  ngOnInit(): void {
    this.UserService.getUsers().subscribe((data) => {
      this.listUser = data;
      this.listUserFilter = data;
    });
    this.ProjectApiService.getProject().subscribe((data) => {
      this.listProject = data.Projects;
    });
  }
  checkAss = false;
  search = '';

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

  onRemoveAss() {
    this.watcher.shift();
    this.checkAss = true
  }

  onRemoveWatcher(id: String) {
    this.watcher = this.watcher.filter((item) => item.userId._id !== id)
  }

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
    };
    console.log('====================================');
    console.log(task);
    console.log('====================================');
    this.TaskApiService.postTask(task).subscribe((data) => {
      if (data.success) {
        this.router.navigate(['list-task']);
      }
    });
  }
}
