import { Component, OnInit } from '@angular/core';
import { listtask, TASK } from '../../module/task';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css'],
})
export class ListtaskComponent implements OnInit {
  loading = true;
  listTask: TASK[] = [];
  constructor() {}

  ngOnInit(): void {
    let that = this;
    setTimeout(() => {
      that.listTask = listtask;
      that.loading = false;
    }, 3000)
    
  }
}
