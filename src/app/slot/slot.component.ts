import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {
  slots: any[] = [];
  bookingForm: FormGroup |any;

  constructor(private formBuilder: FormBuilder, private myService: MyServiceService) { }

  ngOnInit(): void {
    this.initForm();
    this.getSlots();
  }

  private initForm(): void {
    this.bookingForm = this.formBuilder.group({
      userId: ['', Validators.required],
      slotId: [null, Validators.required],
      plan: [null, Validators.required]
    });
  }

  private getSlots(): void {
    this.myService.GetSlot().subscribe(
      (slots: any) => {
        this.slots = slots;
        console.log('Slots fetched successfully:', slots);
      },
      (error: any) => console.error('Error fetching slots:', error)
    );
  }
  
  submitBookingForm(): void {
    if (this.bookingForm.valid) {
      const bookingData = this.bookingForm.value;
      console.log('Booking data:', bookingData);
  
      this.myService.postBookings(bookingData).subscribe(
        (res: any) => {
          console.log('Booking response:', res);
  
          if (res == '1') {
            console.log('Slot booked successfully');
            alert('Slot booked successfully');
            this.getSlots(); // Refresh slots after successful booking
            this.bookingForm.reset(); // Reset form
          } else {
            console.log('Booking failed:', res);
            alert('Failed to book slot. Please try again later.');
          }
        },
        (error: any) => {
          console.error('Booking error:', error);
          alert('Failed to book slot. Please try again later.');
        }
      );
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
  
  
  
  
}
