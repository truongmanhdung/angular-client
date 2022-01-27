import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  user = {
    fullname: 'Trương Mạnh Dũng',
    name: 'Dũng',
    avatar: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/119041444_307503740550551_8009155939658957269_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zQLN47VRqDEAX9U_U5e&tn=cwiumohlbfIyPqcu&_nc_ht=scontent.fhan2-2.fna&oh=00_AT8RsT89WvxOi5KzvL9ydMsPxlpRFwtWVhcYklkOK8v-Hw&oe=6217A596',
    email: 'dungtmph12934@fpt.edu.vn',
    gioitinh: 'male'
  }

  ngOnInit(): void {
  }

}
