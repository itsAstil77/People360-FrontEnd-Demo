import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {





  userData = [
  { userId: 'U001', userName: 'Amit Sharma', shortName: 'AmitS', contactNo: '+971 50 111 2233', emailId: 'amit.s@hospital.com', role: 'Admin', roleName: 'System Administrator', adUserName: 'amit_admin' },
  { userId: 'U002', userName: 'Sarah Jenkins', shortName: 'SarahJ', contactNo: '+971 50 444 5566', emailId: 's.jenkins@hospital.com', role: 'Staff', roleName: 'Senior Nurse', adUserName: 'sarah_n' },
  { userId: 'U003', userName: 'Rajesh Kumar', shortName: 'RajeshK', contactNo: '+971 50 777 8899', emailId: 'rajesh.k@hospital.com', role: 'Staff', roleName: 'Technician', adUserName: 'rajesh_t' },
  { userId: 'U004', userName: 'Elena Rossi', shortName: 'ElenaR', contactNo: '+971 50 999 0011', emailId: 'elena.r@hospital.com', role: 'Manager', roleName: 'Operations Manager', adUserName: 'elena_mgr' },
  { userId: 'U005', userName: 'Omar Al-Farsi', shortName: 'OmarA', contactNo: '+971 50 222 3344', emailId: 'omar.f@hospital.com', role: 'Doctor', roleName: 'Surgeon', adUserName: 'omar_dr' }
];
showUserAddPopup: boolean = false;

openUserAddPopup() {
  this.showUserAddPopup = true;
}

closeUserAddPopup() {
  this.showUserAddPopup = false;
}


}
