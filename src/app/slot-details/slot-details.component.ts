import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-slot-details',
  templateUrl: './slot-details.component.html',
  styleUrls: ['./slot-details.component.css']
})
export class SlotDetailsComponent implements OnInit {
  slots: any[] = [];
  slotForm: FormGroup;
  bookingForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private myService: MyServiceService) {
    this.slotForm = this.formBuilder.group({
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      slots: ['', [Validators.required, Validators.min(1)]],
      trainerName: ['', Validators.required]
    });

    this.bookingForm = this.formBuilder.group({
      slotId: ['', Validators.required],
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.getSlots();
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

  addSlot(): void {
    if (this.slotForm.valid) {
      const slotData = {
        startTime: this.slotForm.value.startTime + ":00", // Ensuring format hh:mm:ss
        endTime: this.slotForm.value.endTime + ":00",
        slots: this.slotForm.value.slots,
        trainerName: this.slotForm.value.trainerName
      };
      console.log('Slot data:', slotData);
      this.myService.postSlot(slotData).subscribe(
        (response: any) => {
          console.log('Slot added successfully:', response);
          this.getSlots(); // Refresh the slot list
          this.slotForm.reset(); // Reset the form
        },
        (error: any) => console.error('Error adding slot:', error)
      );
    }
  }

  deleteSlot(slotId: number): void {
    this.myService.deleteSlot(slotId).subscribe(
      (response: any) => {
        console.log('Slot deleted successfully:', response);
        this.getSlots(); // Refresh the slot list
      },
      (error: any) => console.error('Error deleting slot:', error)
    );
  }

  bookSlot(): void {
    if (this.bookingForm.valid) {
      this.myService.postBookings(this.bookingForm.value).subscribe(
        (response: any) => {
          console.log('Booking successful:', response);
          this.bookingForm.reset(); // Reset the form
        },
        (error: any) => console.error('Error booking slot:', error)
      );
    }
  }
}
