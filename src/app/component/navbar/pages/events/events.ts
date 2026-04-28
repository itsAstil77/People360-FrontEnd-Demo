import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  // This would typically come from an API service
  events= [
    {
      timeStamp: '30-03-2026 12:12:20',
      category: 'Status',
      description: '2FA success for astil.mathew@gmail.com',
      deviceName: 'PIQ Application',
      deviceId: 'BC564Q9',
      timeRaised: '30-03-2026 12:12:20',
      hostName: 'PIQ Hostal-Dubai',
      deviceMac: '17.345:975',
      clientMac: '24.454:35'
    },
    {
      timeStamp: '30-03-2026 12:12:20',
      category: 'Status',
      description: '2FA success for astil.mathew@gmail.com',
      deviceName: 'PIQ Application',
      deviceId: 'BC564Q9',
      timeRaised: '30-03-2026 12:12:20',
      hostName: 'PIQ Hostal-Dubai',
      deviceMac: '17.345:975',
      clientMac: '24.454:35'
    }
    // Add more objects as needed
  ];
}


