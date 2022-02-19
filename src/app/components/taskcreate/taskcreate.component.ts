import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../../services/task-api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskcreateComponent implements OnInit {

  constructor(private TaskApiService: TaskApiService, private router: Router) { }

  ngOnInit(): void {
  }

  submitAddTaskForm(f: NgForm) {
    f.value.teamSize = +f.value.teamSize;
    f.value.project_money = +f.value.project_money
    console.log(f.value);
    
    this.TaskApiService.postProject(f.value).subscribe((data) => {
      if(data.success){
        this.router.navigate(['du-an'])
      }
    })
    
  }

}