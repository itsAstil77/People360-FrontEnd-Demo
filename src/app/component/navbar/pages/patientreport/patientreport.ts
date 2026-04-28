import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-patientreport',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './patientreport.html',
  styleUrl: './patientreport.css',
})
export class Patientreport {





  patients = [
  {
    name: 'John Smith',
    ot: 'OT 2',
    status: 'In Surgery',
    doctor: 'Dr. Arun',
    startTime: '09:00 AM',
    duration: '00:12:33',
    updated: '9:15 AM'
  },
  {
    name: 'Ranjith',
    ot: 'OT 3',
    status: 'Waiting',
    doctor: 'Dr. Kumar',
    startTime: '09:30 AM',
    duration: '-',
    updated: '9:30 AM'
  },
  {
    name: 'Ajith Kumar',
    ot: 'OT 4',
    status: 'In Surgery',
    doctor: 'Dr. Ajith',
    startTime: '08:45 AM',
    duration: '00:38:19',
    updated: '8:42 AM'
  },
  {
    name: 'Sharon',
    ot: 'OT 1',
    status: 'Ready',
    doctor: 'Dr. Meena',
    startTime: '10:00 AM',
    duration: '-',
    updated: '10:00 AM'
  }
];

}
