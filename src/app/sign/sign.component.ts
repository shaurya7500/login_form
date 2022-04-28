import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  signupForm = new FormGroup({
    Fullname: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    mobile: new FormControl("",[Validators.required,Validators.maxLength(10)]),
    password: new FormControl("",[Validators.required]),
  })
  signup(){
    console.warn(this.signupForm.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
