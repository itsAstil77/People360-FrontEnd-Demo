import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-equipment-master',
  imports: [CommonModule],
  templateUrl: './equipment-master.html',
  styleUrl: './equipment-master.css',
})
export class EquipmentMaster {

equipmentData = [
  {
    Equipment_ID: 'EQ-201',
    Equipment_Name: 'Dräger Perseus A500',
    Equipment_Type: 'Anesthesia Machine',
    Serial_Number: 'SN-DR-99210',
    Assigned_OT: 'OT-Cardiac',
    Tag_ID: 'TAG-EQ-001',
    Status: 'In Use',
    Last_Service_Date: '15-01-2026'
  },
  {
    Equipment_ID: 'EQ-202',
    Equipment_Name: 'GE Carescape B850',
    Equipment_Type: 'Patient Monitor',
    Serial_Number: 'SN-GE-44321',
    Assigned_OT: 'OT-Neuro-1',
    Tag_ID: 'TAG-EQ-002',
    Status: 'Available',
    Last_Service_Date: '10-02-2026'
  },
  {
    Equipment_ID: 'EQ-203',
    Equipment_Name: 'Stryker 1688 AIM 4K',
    Equipment_Type: 'Endoscopy Tower',
    Serial_Number: 'SN-ST-88722',
    Assigned_OT: 'OT-Gen-A',
    Tag_ID: 'TAG-EQ-003',
    Status: 'Maintenance',
    Last_Service_Date: '01-03-2026'
  },
  {
    Equipment_ID: 'EQ-204',
    Equipment_Name: 'Philips Pulsera',
    Equipment_Type: 'C-Arm (X-Ray)',
    Serial_Number: 'SN-PH-11002',
    Assigned_OT: 'OT-Ortho',
    Tag_ID: 'TAG-EQ-004',
    Status: 'Available',
    Last_Service_Date: '20-12-2025'
  },
  {
    Equipment_ID: 'EQ-205',
    Equipment_Name: 'Maquet PowerLED II',
    Equipment_Type: 'Surgical Light',
    Serial_Number: 'SN-MQ-55431',
    Assigned_OT: 'OT-Gen-B',
    Tag_ID: 'TAG-EQ-005',
    Status: 'Available',
    Last_Service_Date: '05-01-2026'
  },
  {
    Equipment_ID: 'EQ-206',
    Equipment_Name: 'Medtronic StealthStation',
    Equipment_Type: 'Surgical Navigation',
    Serial_Number: 'SN-MT-22109',
    Assigned_OT: 'OT-Neuro-1',
    Tag_ID: 'TAG-EQ-006',
    Status: 'In Use',
    Last_Service_Date: '12-02-2026'
  }
];

}
