import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}
  urlApi = "http://localhost:8080/api/signin"
  submitLoginForm(f: NgForm) {
    console.log(f.value);
    this.http.post<any>(this.urlApi, f.value).subscribe((res) => {
     
      if(res.token){
        localStorage.setItem('token', res.token)
        this.router.navigate(['/dash-board'])
      }else{
        this.router.navigate(['/login'])
      }
    })
  }
}
