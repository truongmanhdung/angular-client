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

  ngOnInit(): void {
    this.UserService.getUsers().subscribe((data) => {
      this.listUser = data;
    });
    this.ProjectApiService.getProject().subscribe((data) => {
      this.listProject = data.Projects;
    });
  }

  submitAddTaskForm(f: NgForm) {
    const assignee = {
      userId: f.value.assignee,
    };
    const watcher = [assignee];
    f.value.watcher = watcher;
    
    const task = {
        nameTask: f.value.nameTask,
        desc: f.value.desc,
        projectId: f.value.projectId,
        watcher,
        startDate: f.value.startDate,
    }
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
