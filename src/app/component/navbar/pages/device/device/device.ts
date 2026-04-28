import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-device',
  imports: [CommonModule],
  templateUrl: './device.html',
  styleUrl: './device.css',
})
export class Device {
  deviceData = [
  {
    Sl_No: 1,
    Model: 'PRO-X100',
    Type: 'Fixed',
    Unique_Id: '00:1A:2B:3C:4D:5E',
    Project: 'OT Management',
    Country: 'UAE',
    Area: 'Dubai Mall',
    Building: 'Ajmal Building',
    Floor: 'Ground Floor',
    Zone: 'Z1'
  },
  {
    Sl_No: 2,
    Model: 'MOB-G5',
    Type: 'Mobile',
    Unique_Id: 'BC:89:E4:F1:00:22',
    Project: 'OT Management',
    Country: 'UAE',
    Area: 'Marina Mall',
    Building: 'Tower A',
    Floor: '1st Floor',
    Zone: 'Z3'
  },
  {
    Sl_No: 3,
    Model: 'PRO-X100',
    Type: 'Fixed',
    Unique_Id: 'AA:BB:CC:DD:EE:FF',
    Project: 'OT Management',
    Country: 'UAE',
    Area: 'Dubai Mall',
    Building: 'Ajmal Building',
    Floor: 'Ground Floor',
    Zone: 'Z1'
  },
  {
    Sl_No: 4,
    Model: 'SENS-V2',
    Type: 'Fixed',
    Unique_Id: '11:22:33:44:55:66',
    Project: 'OT Management',
    Country: 'UAE',
    Area: 'Yas Mall',
    Building: 'Medical Center',
    Floor: 'Basement',
    Zone: 'Z5'
  },
  {
    Sl_No: 5,
    Model: 'MOB-G5',
    Type: 'Mobile',
    Unique_Id: 'FF:EE:DD:CC:BB:AA',
    Project: 'OT Management',
    Country: 'UAE',
    Area: 'Dubai Mall',
    Building: 'Ajmal Building',
    Floor: '2nd Floor',
    Zone: 'Z2'
  },
  {
    Sl_No: 6,
    Model: 'PRO-X105',
    Type: 'Fixed',
    Unique_Id: '55:66:77:88:99:00',
    Project: 'OT Management',
    Country: 'UAE',
    Area: 'Mall of Emirates',
    Building: 'West Wing',
    Floor: 'Ground Floor',
    Zone: 'Z1'
  }
];

}
