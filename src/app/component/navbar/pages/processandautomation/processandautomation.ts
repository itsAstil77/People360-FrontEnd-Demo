import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-processandautomation',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './processandautomation.html',
  styleUrl: './processandautomation.css',
})
export class Processandautomation {

  automationRules = [
  { name: 'ALM', type: 'Standard', lastActive: '01-01-2001 00:00:00', createdOn: '13-03-2025', status: true },
  { name: 'Sensor', type: 'Standard', lastActive: '12-01-2008 04:02:50', createdOn: '31-03-2025', status: false },
  { name: 'Notify', type: 'Standard', lastActive: '11-09-2015 10:01:00', createdOn: '01-04-2025', status: false },
  { name: 'SMS', type: 'Standard', lastActive: '07-07-2026 09:09:09', createdOn: '01-04-2026', status: false }
];

}
