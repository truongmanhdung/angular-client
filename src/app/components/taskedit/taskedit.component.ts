import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TASK } from '../../module/task';
@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.css']
})
export class TaskeditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { 
    
  }
  loading = true;


  ngOnInit(): void {
    let that = this;
    const id = Number(this.route.snapshot.paramMap.get('id'));
   
    setTimeout(() => {
      
    }, 3000)
    
  }

}
