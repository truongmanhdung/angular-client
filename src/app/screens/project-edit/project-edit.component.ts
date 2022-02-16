import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectApiService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  constructor(private ProjectApiService: ProjectApiService, private router: Router) { }

  ngOnInit(): void {
  }
  
  submitAddProjectForm(f: NgForm) {
    f.value.teamSize = +f.value.teamSize;
    f.value.project_money = +f.value.project_money
    console.log(f.value);
    
    this.ProjectApiService.postProject(f.value).subscribe((data) => {
      if(data.success){
        this.router.navigate(['du-an'])
      }
    })
    
  }
}
