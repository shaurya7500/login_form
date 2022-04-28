import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl("",[Validators.required]),
    password: new FormControl("",[Validators.required]),
  })
  login(){
    console.warn(this.loginForm.value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
