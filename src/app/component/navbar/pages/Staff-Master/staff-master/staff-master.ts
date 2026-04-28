import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-master',
  imports: [CommonModule],
  templateUrl: './staff-master.html',
  styleUrl: './staff-master.css',
})
export class StaffMaster {

staffData = [
  {
    Staff_ID: 'STF-101',
    Staff_Name: 'Dr. Arjun Mehta',
    Role: 'Doctor',
    Department: 'Cardiology',
    Tag_ID: 'RFID-C-9921',
    Contact_Number: '+91 98765 43210',
    Shift_Type: 'Morning',
    Status: 'Active'
  },
  {
    Staff_ID: 'STF-102',
    Staff_Name: 'Nurse Sarah Wilson',
    Role: 'Nurse',
    Department: 'Emergency',
    Tag_ID: 'BLE-E-4432',
    Contact_Number: '+91 87654 32109',
    Shift_Type: 'Night',
    Status: 'Active'
  },
  {
    Staff_ID: 'STF-103',
    Staff_Name: 'Tech Robert Chen',
    Role: 'Technician',
    Department: 'Radiology',
    Tag_ID: 'RFID-R-1120',
    Contact_Number: '+91 76543 21098',
    Shift_Type: 'General',
    Status: 'Active'
  },
  {
    Staff_ID: 'STF-104',
    Staff_Name: 'Dr. Elena Rodriguez',
    Role: 'Doctor',
    Department: 'Neurosurgery',
    Tag_ID: 'BLE-N-8876',
    Contact_Number: '+91 65432 10987',
    Shift_Type: 'Morning',
    Status: 'Inactive'
  },
  {
    Staff_ID: 'STF-105',
    Staff_Name: 'Nurse David Geller',
    Role: 'Nurse',
    Department: 'General Surgery',
    Tag_ID: 'RFID-S-3345',
    Contact_Number: '+91 54321 09876',
    Shift_Type: 'Evening',
    Status: 'Active'
  },
  {
    Staff_ID: 'STF-106',
    Staff_Name: 'Tech Priya Singh',
    Role: 'Technician',
    Department: 'Laboratory',
    Tag_ID: 'BLE-L-5521',
    Contact_Number: '+91 43210 98765',
    Shift_Type: 'Night',
    Status: 'Active'
  }
];

}
