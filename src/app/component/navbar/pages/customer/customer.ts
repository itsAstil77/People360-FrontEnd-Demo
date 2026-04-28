import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {











zones = [
  { name: 'Zone A', newVisitors: 25, repeatVisitors: 10 },
  { name: 'Zone B', newVisitors: 40, repeatVisitors: 18 },
  { name: 'Zone C', newVisitors: 15, repeatVisitors: 22 },
  { name: 'Zone D', newVisitors: 30, repeatVisitors: 12 },
  { name: 'Zone E', newVisitors: 18, repeatVisitors: 9 },
  { name: 'Zone F', newVisitors: 50, repeatVisitors: 20 }
];

}
