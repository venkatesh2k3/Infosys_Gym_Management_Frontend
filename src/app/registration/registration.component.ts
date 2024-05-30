import { MyServiceService } from '../my-service.service';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit{
  registrationForm: FormGroup|any;
  formGroup: FormGroup |any;
  constructor(public service:MyServiceService){}

  ngOnInit():void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email:new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      phNum:new FormControl('',[ Validators.required]),
      feedback: new FormControl('',[])

    });
  }

  
onSubmit(){
const data = this.registrationForm.value;
  console.log(data);
   this.service.PostData(data).subscribe((res:any)=>{
  console.log(res,"posting response");
        if (res == 1) {
          this.showSuccessAlert();
          console.log('Registration successful');
        }
}); 
// this.registrationForm.reset();
}
showSuccessAlert(): void {
  alert("Congratulations! Your registration was successful.");
}
}