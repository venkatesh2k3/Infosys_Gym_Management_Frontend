import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  myForm: FormGroup|any
  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.myForm = this.formBuilder.group({});
  }

  register() {
    console.log('Register button clicked');
    this.router.navigateByUrl('reg')
  }

  login() {
    console.log('Login button clicked');
    this.router.navigateByUrl('login')
  }

}
