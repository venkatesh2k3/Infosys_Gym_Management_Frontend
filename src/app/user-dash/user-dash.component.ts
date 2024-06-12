import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrl: './user-dash.component.css'
})
export class UserDashComponent {
  resValue: any;

constructor(public myservice:MyServiceService, private router: Router){}
ngOnInit(): void {
  this.resValue = this.myservice.getResValue();
  console.log('Res value in UserDashComponent:', this.resValue);
}
logout(): void {
  // Clear any stored user information, e.g., tokens
  this.myservice.setResValue(null);
  // Navigate to the login page
  this.router.navigateByUrl('/login');
}
}
