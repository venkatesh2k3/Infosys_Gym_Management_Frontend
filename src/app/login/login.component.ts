import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  
  constructor(public service: MyServiceService, private formBuilder: FormBuilder, private router:Router,) {
    this.loginForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const data = this.loginForm.value;
      console.log(data);
      this.service.GetData(data).subscribe((res: any) => {
        console.log(res, "login response");
        if (res == 1) {
          this.showSuccessAlert();
          console.log('Login successful');
          this.router.navigateByUrl('userdash')
        } else {
          this.showFailureAlert();
          console.log('Login unsuccessful');
        }
        this.loginForm.reset();
      });
    }
  }
  
  showSuccessAlert(): void {
    alert("Congratulations! You've successfully logged in.");
  }
  
  showFailureAlert(): void {
    alert("Login unsuccessful. Please check your credentials.");
  }
 
}
