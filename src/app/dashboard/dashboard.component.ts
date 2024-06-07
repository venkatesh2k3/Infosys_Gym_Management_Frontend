import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  myForm: FormGroup|any
  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.myForm = this.formBuilder.group({});
  }

}
