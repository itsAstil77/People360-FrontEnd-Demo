import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ot-master',
  imports: [CommonModule],
  templateUrl: './ot-master.html',
  styleUrl: './ot-master.css',
})
export class OtMaster {
otData = [
  {
    OT_ID: 'OT-001',
    OT_Name: 'OT-Cardiac',
    Department: 'Cardiology',
    Floor: 'Floor 3',
    Capacity: 12,
    OT_Type: 'Specialized',
    Status: 'Active',
    Sterilization_Type: 'UV-C & HEPA',
    Air_Pressure_Type: 'Positive',
    Temp_Range: '18°C - 22°C',
    Humidity_Range: '30% - 60%'
  },
  {
    OT_ID: 'OT-002',
    OT_Name: 'OT-Neuro-1',
    Department: 'Neurosurgery',
    Floor: 'Floor 4',
    Capacity: 10,
    OT_Type: 'Specialized',
    Status: 'Active',
    Sterilization_Type: 'Chemical Fogging',
    Air_Pressure_Type: 'Positive',
    Temp_Range: '17°C - 20°C',
    Humidity_Range: '40% - 55%'
  },
  {
    OT_ID: 'OT-003',
    OT_Name: 'OT-Gen-A',
    Department: 'General Surgery',
    Floor: 'Floor 2',
    Capacity: 15,
    OT_Type: 'General',
    Status: 'Inactive',
    Sterilization_Type: 'HEPA Filtration',
    Air_Pressure_Type: 'Positive',
    Temp_Range: '20°C - 24°C',
    Humidity_Range: '45% - 60%'
  },
  {
    OT_ID: 'OT-004',
    OT_Name: 'OT-Ortho',
    Department: 'Orthopedics',
    Floor: 'Floor 2',
    Capacity: 8,
    OT_Type: 'Specialized',
    Status: 'Active',
    Sterilization_Type: 'UV-C',
    Air_Pressure_Type: 'Positive',
    Temp_Range: '18°C - 21°C',
    Humidity_Range: '35% - 50%'
  },
  {
    OT_ID: 'OT-005',
    OT_Name: 'OT-Iso-1',
    Department: 'Infectious Diseases',
    Floor: 'Floor 1',
    Capacity: 4,
    OT_Type: 'Specialized',
    Status: 'Active',
    Sterilization_Type: 'Full Bio-Wash',
    Air_Pressure_Type: 'Negative', // Crucial for isolation
    Temp_Range: '19°C - 23°C',
    Humidity_Range: '40% - 60%'
  },
  {
    OT_ID: 'OT-006',
    OT_Name: 'OT-Trauma',
    Department: 'Emergency',
    Floor: 'G-Floor',
    Capacity: 20,
    OT_Type: 'General',
    Status: 'Active',
    Sterilization_Type: 'Rapid Chemical',
    Air_Pressure_Type: 'Positive',
    Temp_Range: '21°C - 25°C',
    Humidity_Range: '50% - 65%'
  }
];

}
