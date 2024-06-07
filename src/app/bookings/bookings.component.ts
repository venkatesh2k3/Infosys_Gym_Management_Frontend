import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';


interface Booking {
  id: number;
  plans: string;
  bookingTime: string;
}
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: MyServiceService) { }

  ngOnInit(): void {
    this.bookingService.GetBookings().subscribe((bookings: any[]) => {
      this.bookings = bookings;
    });
  }
}


