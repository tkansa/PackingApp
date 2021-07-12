import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms'
//import { } from 'rxjs/operators';
import { UserListsApiService } from '../Services/API_Services/user-lists-api.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  // registerForm: FormGroup;
  // loading = false;
  // submitted = false;
  // error: string;



  constructor(
    //private formBuilder: FormBuilder,
    //private router: Router,
    private userService: UserListsApiService
  ) {
    console.log("Home Component");



  }



  ngOnInit() { console.log("ngOinINit"); }
  /*
  ngOnInit() {
  this.registerForm = this.formBuilder.group({
  username: ['', Validators.required],
  password: ['', [Validators.required, Validators.minLength(3)]]
  });
  
  }
  
  
  
  // convenience getter for easy access to form fields
  get f() {
  return this.registerForm.controls;
  }
  
  
  
  onSubmit() {
  console.log("onSubmit");
  this.submitted = true;
  
  
  
  if (this.registerForm.invalid) {
  console.log("Error", this.registerForm.controls.username.errors);
  return;
  }
  
  
  
  console.log(this.registerForm.value);
  
  
  
  const { username, password } = this.registerForm.value;
  
  
  
  this.loading = true;
  
  
  
  // call api for creating account
  this.userService.addUserList(username, password).subscribe(
  data => {
  this.loading = false;
  console.log("Account is created successfully");
  },
  error => {
  this.error = error;
  this.loading = false;
  console.log("Account creation is failed");
  }
  );
  
  
  
  
  
  }
  */




}
