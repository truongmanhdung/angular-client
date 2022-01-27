import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TASK, listtask } from '../../module/task';
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
  taskEdit:TASK = {
    id: 0,
    taskName: '',
    date: '',
    teamSize: 0
  };

  ngOnInit(): void {
    let that = this;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const task = listtask.find((task: TASK) => task.id = id);
    setTimeout(() => {
      if(task){
        that.taskEdit = task;
        that.loading = false
      }
    }, 3000)
    
  }

}
