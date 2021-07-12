import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // ADD THIS

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private route: Router
  ) { }
  
  username: string = '';
  
  clickLogin() {
    this.route.navigateByUrl('/userprofile');
  }
}
