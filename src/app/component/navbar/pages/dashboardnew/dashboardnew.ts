import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
  interface Employee {
  name: string;
  age: number;
  gender: string;
  address: string;
}


@Component({
  selector: 'app-dashboardnew',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './dashboardnew.html',
  styleUrl: './dashboardnew.css',
})
export class Dashboardnew {










  presentList: Employee[] = [
  { name: 'John Doe', age: 29, gender: 'Male', address: '12, MG Road, Bangalore' },
  { name: 'Alice Smith', age: 25, gender: 'Female', address: '45, Indiranagar, Bangalore' },
  { name: 'Raj Kumar', age: 32, gender: 'Male', address: '88, Anna Nagar, Chennai' },
  { name: 'Priya Sharma', age: 28, gender: 'Female', address: '10, Park St, Kolkata' },
  { name: 'Vikram Singh', age: 40, gender: 'Male', address: '22, Sector 15, Delhi' },
  { name: 'Sneha Reddy', age: 27, gender: 'Female', address: '05, Banjara Hills, Hyderabad' },
  { name: 'Amit Patel', age: 35, gender: 'Male', address: '56, CG Road, Ahmedabad' },
  { name: 'Megha Nair', age: 31, gender: 'Female', address: '09, Marine Drive, Mumbai' }
];

absentList: Employee[] = [
  { name: 'Rahul Verma', age: 33, gender: 'Male', address: '14, Residency Rd, Pune' }
];
isPopupOpen = false;
openAttendancePopup() { this.isPopupOpen = true; }
























isProfilePopupOpen = false;

openProfilePopup() {
  this.isProfilePopupOpen = true;
}

profileList = [
  { name: 'Jeni Sonalika', age: 28, gender: 'Female', type: 'Frequent Visitor' },
  { name: 'John', age: 45, gender: 'Male', type: 'New Customer' },
  { name: 'Mohamad Kumar Jeevan', age: 25, gender: 'Male', type: 'Temporary Customer' },
  { name: 'Valapathi Immanual Kumara Kandan', age: 55, gender: 'Male', type: 'New Customer' },
  { name: 'Arun', age: 30, gender: 'Male', type: 'Visitor' },
  { name: 'Priya', age: 22, gender: 'Female', type: 'New Customer' },
  { name: 'Kumar', age: 40, gender: 'Male', type: 'Frequent Visitor' },
  { name: 'Divya', age: 35, gender: 'Female', type: 'Visitor' }
];







isFootfallPopupOpen = false;

openFootfallPopup() {
  this.isFootfallPopupOpen = true;
}









isPopularPopupOpen = false;

openPopularPopup() {
  this.isPopularPopupOpen = true;
}

popularList = [
  { name: 'Hotspot Area', value: '27%', trend: '' },
  { name: 'Product A', value: '72% ↑', trend: 'up' },
  { name: 'Cash Register', value: '58% ↑', trend: 'up' },
  { name: 'Entrance', value: '41%', trend: '' },
  { name: 'Product B', value: '33% ↓', trend: 'down' },
  { name: 'Product C', value: '29%', trend: '' },
  { name: 'Display Zone', value: '64% ↑', trend: 'up' },
  { name: 'Billing Counter', value: '52% ↑', trend: 'up' },

  /* extra to show scroll */
  { name: 'Zone A', value: '48%', trend: '' },
  { name: 'Zone B', value: '36% ↓', trend: 'down' },
  { name: 'Zone C', value: '55% ↑', trend: 'up' }
];








}
