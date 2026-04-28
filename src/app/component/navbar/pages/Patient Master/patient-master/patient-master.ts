import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-master',
  imports: [CommonModule],
  templateUrl: './patient-master.html',
  styleUrl: './patient-master.css',
})
export class PatientMaster {

patientData = [
  {
    Patient_ID: 'HIS-8801',
    Patient_Name: 'John Doe',
    Gender: 'Male',
    Age: 45,
    Case_ID: 'SURG-2024-001',
    Department: 'Orthopedics',
    Assigned_OT: 'OT-Ortho',
    Tag_ID: 'RFID-P-101',
    Surgery_Type: 'Knee Replacement',
    Priority: 'Planned',
    Status: 'Pre-op'
  },
  {
    Patient_ID: 'HIS-8802',
    Patient_Name: 'Jane Smith',
    Gender: 'Female',
    Age: 29,
    Case_ID: 'SURG-2024-002',
    Department: 'Cardiology',
    Assigned_OT: 'OT-Cardiac',
    Tag_ID: 'RFID-P-102',
    Surgery_Type: 'Angioplasty',
    Priority: 'Emergency',
    Status: 'OT'
  },
  {
    Patient_ID: 'HIS-8803',
    Patient_Name: 'Michael Brown',
    Gender: 'Male',
    Age: 62,
    Case_ID: 'SURG-2024-003',
    Department: 'Neurosurgery',
    Assigned_OT: 'OT-Neuro-1',
    Tag_ID: 'RFID-P-103',
    Surgery_Type: 'Craniotomy',
    Priority: 'Emergency',
    Status: 'Recovery'
  },
  {
    Patient_ID: 'HIS-8804',
    Patient_Name: 'Emily Davis',
    Gender: 'Female',
    Age: 35,
    Case_ID: 'SURG-2024-004',
    Department: 'General Surgery',
    Assigned_OT: 'OT-Gen-A',
    Tag_ID: 'RFID-P-104',
    Surgery_Type: 'Appendectomy',
    Priority: 'Planned',
    Status: 'Completed'
  },
  {
    Patient_ID: 'HIS-8805',
    Patient_Name: 'Robert Wilson',
    Gender: 'Male',
    Age: 50,
    Case_ID: 'SURG-2024-005',
    Department: 'Cardiology',
    Assigned_OT: 'OT-Cardiac',
    Tag_ID: 'RFID-P-105',
    Surgery_Type: 'Pacemaker Implantation',
    Priority: 'Planned',
    Status: 'Pre-op'
  },
  {
    Patient_ID: 'HIS-8806',
    Patient_Name: 'Sophia Garcia',
    Gender: 'Female',
    Age: 12,
    Case_ID: 'SURG-2024-006',
    Department: 'Pediatrics',
    Assigned_OT: 'OT-Gen-B',
    Tag_ID: 'RFID-P-106',
    Surgery_Type: 'Tonsillectomy',
    Priority: 'Planned',
    Status: 'Completed'
  }
];

}
