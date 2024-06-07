import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-slot-details',
  templateUrl: './slot-details.component.html',
  styleUrl: './slot-details.component.css'
})
export class SlotDetailsComponent {
  slots: any[] = [];
  constructor(private formBuilder: FormBuilder, private myService: MyServiceService) { }

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
}
