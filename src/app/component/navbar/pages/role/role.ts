import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-role',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './role.html',
  styleUrl: './role.css',
})
export class Role {










  roleData = [
  { roleId: 'R001', roleName: 'Super Admin', description: 'Full system access', permission: 'All Modules' },
  { roleId: 'R002', roleName: 'Manager', description: 'Departmental oversight', permission: 'Reports & OT View' },
  { roleId: 'R003', roleName: 'Surgeon', description: 'Surgery scheduling access', permission: 'Surgery & Patient' },
  { roleId: 'R004', roleName: 'Technician', description: 'Device management', permission: 'Device & Asset' },
  { roleId: 'R005', roleName: 'Staff Nurse', description: 'Patient monitoring', permission: 'Patient & OT View' }
];




}
