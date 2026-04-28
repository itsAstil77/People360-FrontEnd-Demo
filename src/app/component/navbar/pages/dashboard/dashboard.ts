import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {


  newDashboard:boolean=false;

  openDashboard(){
    this.newDashboard=true;
  }

  cancel(){
    this.newDashboard=false;
  }


  doctorList:boolean=false;

  opendoctorList(){
    this.doctorList=true;
  }

  cancelDoctorList(){
    this.doctorList=false;
  }


  doctors = [
  { name: 'Dr. Arjun Mehta', spec: 'Cardiologist', available: true },
  { name: 'Dr. Elena Gilbert', spec: 'Neurosurgeon', available: true },
  { name: 'Dr. Sarah Wilson', spec: 'General Surgeon', available: false },
  { name: 'Dr. Robert Chen', spec: 'Orthopedic', available: true },
  { name: 'Dr. Priya Singh', spec: 'Anesthesiologist', available: false }
];

patients = [
  { name: 'John Doe', id: 'HIS-8801', room: 'OT-1', priority: 'Emergency' },
  { name: 'Jane Smith', id: 'HIS-8802', room: 'OT-Cardiac', priority: 'Planned' },
  { name: 'Michael Brown', id: 'HIS-8803', room: 'Recovery-A', priority: 'Emergency' },
  { name: 'Emily Davis', id: 'HIS-8804', room: 'Pre-Op', priority: 'Planned' },
  { name: 'Robert Wilson', id: 'HIS-8805', room: 'OT-Neuro', priority: 'Planned' }
];

nurses = [
  { name: 'Nurse Clara', shift: 'Morning' },
  { name: 'Nurse David', shift: 'Night' },
  { name: 'Nurse Jasmine', shift: 'Evening' },
  { name: 'Nurse Samuel', shift: 'Morning' },
];


patientCases = [
  {
    Name: 'Astil Mathew',
    Status: 'In Surgery',
    ElapsedTime: '00:12:33',
    OT: 'OT 2',
    StartTime: '9:15 AM',
    EndTime: '10:45 AM',
    Doctor: 'Arjun Mehta',
    Disease: 'Angioplasty',
    Progress: 25
  },
  {
    Name: 'Ranjith',
    Status: 'Pre OP',
    ElapsedTime: '00:00:00',
    OT: 'OT 3',
    StartTime: '9:30 AM',
    EndTime: '11:00 AM',
    Doctor: 'Elena Gilbert',
    Disease: 'Appendectomy',
    Progress: 5
  },
  {
    Name: 'Ajith Kumar',
    Status: 'In Surgery',
    ElapsedTime: '00:38:19',
    OT: 'OT 4',
    StartTime: '8:42 AM',
    EndTime: '10:15 AM',
    Doctor: 'Robert Chen',
    Disease: 'Knee Replacement',
    Progress: 65
  },
  {
    Name: 'Sharon',
    Status: 'In Surgery',
    ElapsedTime: '00:30:00',
    OT: 'OT 5',
    StartTime: '8:15 AM',
    EndTime: '09:45 AM',
    Doctor: 'Sarah Wilson',
    Disease: 'Cholecystectomy',
    Progress: 45
  }
];

  operationList:boolean=false;

  openoperationList(){
    this.operationList=true;
  }

  cancelOperationList(){
    this.operationList=false;
  }

showWidgetPopup:boolean=false;

closeWidgetPopup(){
  this.showWidgetPopup=false;
}

openWidgetPopup(){
  this.showWidgetPopup=true;
}
}


