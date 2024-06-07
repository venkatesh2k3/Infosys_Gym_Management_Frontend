import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: any[]=[];
  constructor(private  userService: MyServiceService) { }

  ngOnInit(): void {
    this.userService.getReg().subscribe((bookings: any[]) => {
      this.users = bookings;
    });
  }
}
