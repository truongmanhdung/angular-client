import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }
  apiUrl = "https://6132c0c8ab7b1e001799b5bc.mockapi.io/products"
  ngOnInit(): void {
    this.http.get<any>(this.apiUrl).subscribe((data) => {
      console.log(data);
    })

  }

}
