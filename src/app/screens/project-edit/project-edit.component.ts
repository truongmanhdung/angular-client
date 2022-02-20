import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectApiService } from 'src/app/services/project-api.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  constructor(private ProjectApiService: ProjectApiService, private route: ActivatedRoute, private router: Router) { }
  projectEdit:any = {};
  ngOnInit(): void {
    let that = this
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.ProjectApiService.getOneProject(id).subscribe((data) => {
        this.projectEdit =  data.project
      })
    }
    
    
  }
  
  submitAddProjectForm(f: NgForm) {
   
    f.value.teamSize = +f.value.teamSize;
    f.value.project_money = +f.value.project_money
    this.ProjectApiService.putProject( this.projectEdit._id ,f.value).subscribe((data) => {
      if(data.success){
        this.router.navigate(['du-an'])
      }
    })
    
  }
}
