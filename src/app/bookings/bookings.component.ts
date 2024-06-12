import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

interface Booking {
  id: number;
  plans: string;
  bookingTime: string;
  slotID: number;
  userID: number;
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: MyServiceService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings(): void {
    this.bookingService.GetBookings().subscribe((bookings: any[]) => {
      this.bookings = bookings;
    });
  }

  cancelBooking(bookingId: number): void {
    this.bookingService.CancelBooking(bookingId).subscribe(
      () => {
        console.log('Booking cancelled successfully');
        // Optionally, you can refresh the bookings list after cancellation
        this.getBookings();
      },
      (error: any) => console.error('Error cancelling booking:', error)
    );
  }
}
