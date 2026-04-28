import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ot-scheduling',
  imports: [CommonModule],
  templateUrl: './ot-scheduling.html',
  styleUrl: './ot-scheduling.css',
})
export class OtScheduling {
scheduleData = [
  {
    Schedule_ID: 'SCH-001',
    OT_ID: 'OT-Cardiac',
    Surgery_ID: 'SURG-2024-002',
    Patient_ID: 'HIS-8802',
    Surgeon_ID: 'STF-101',
    Planned_Start_Time: '2024-04-10 08:00',
    Planned_End_Time: '2024-04-10 11:30',
    Surgery_Type: 'Angioplasty',
    Priority: 'Emergency',
    Status: 'Scheduled'
  },
  {
    Schedule_ID: 'SCH-002',
    OT_ID: 'OT-Ortho',
    Surgery_ID: 'SURG-2024-001',
    Patient_ID: 'HIS-8801',
    Surgeon_ID: 'STF-105',
    Planned_Start_Time: '2024-04-10 09:00',
    Planned_End_Time: '2024-04-10 13:00',
    Surgery_Type: 'Knee Replacement',
    Priority: 'Planned',
    Status: 'In-Progress'
  },
  {
    Schedule_ID: 'SCH-003',
    OT_ID: 'OT-Neuro-1',
    Surgery_ID: 'SURG-2024-003',
    Patient_ID: 'HIS-8803',
    Surgeon_ID: 'STF-104',
    Planned_Start_Time: '2024-04-10 10:30',
    Planned_End_Time: '2024-04-10 15:30',
    Surgery_Type: 'Craniotomy',
    Priority: 'Emergency',
    Status: 'Delayed'
  },
  {
    Schedule_ID: 'SCH-004',
    OT_ID: 'OT-Gen-A',
    Surgery_ID: 'SURG-2024-004',
    Patient_ID: 'HIS-8804',
    Surgeon_ID: 'STF-103',
    Planned_Start_Time: '2024-04-10 14:00',
    Planned_End_Time: '2024-04-10 16:00',
    Surgery_Type: 'Appendectomy',
    Priority: 'Planned',
    Status: 'Completed'
  },
  {
    Schedule_ID: 'SCH-005',
    OT_ID: 'OT-Cardiac',
    Surgery_ID: 'SURG-2024-005',
    Patient_ID: 'HIS-8805',
    Surgeon_ID: 'STF-101',
    Planned_Start_Time: '2024-04-10 16:00',
    Planned_End_Time: '2024-04-10 18:00',
    Surgery_Type: 'Pacemaker Implantation',
    Priority: 'Planned',
    Status: 'Cancelled'
  },
  {
    Schedule_ID: 'SCH-006',
    OT_ID: 'OT-Gen-B',
    Surgery_ID: 'SURG-2024-006',
    Patient_ID: 'HIS-8806',
    Surgeon_ID: 'STF-105',
    Planned_Start_Time: '2024-04-11 08:30',
    Planned_End_Time: '2024-04-11 10:00',
    Surgery_Type: 'Tonsillectomy',
    Priority: 'Planned',
    Status: 'Scheduled'
  }
];

}
