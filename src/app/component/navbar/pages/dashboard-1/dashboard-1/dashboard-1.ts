import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard-1',
  imports: [RouterLink,CommonModule],
  templateUrl: './dashboard-1.html',
  styleUrl: './dashboard-1.css',
})
export class Dashboard1 {

  zones = [
    { name: 'People in zone1', people: 173, visitors: 173, contractors: 173 },
    { name: 'People in zone2', people: 173, visitors: 173, contractors: 173 },
    { name: 'People in zone3', people: 173, visitors: 173, contractors: 173 },
    { name: 'People in zone4', people: 173, visitors: 173, contractors: 173 }
];

barData = [
    { label: 'zone1', height: 40, color: '#da0000' },
    { label: 'zone3', height: 100, color: '#00f79c' },
    { label: 'zone2', height: 60, color: '#ff6702' },
    { label: 'zone4', height: 75, color: '#be0480' },
    { label: 'zone5', height: 65, color: '#03742e' }
];

}
