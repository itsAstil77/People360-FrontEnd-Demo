import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-license',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './license.html',
  styleUrl: './license.css',
})
export class License {











    licenseData = [
  { state: 'Active', id: 'LIC-001', type: 'Enterprise', act: 'Y', psm: 'N', vem: 'Y', cam: 'Y', atm: 'N', mem: 'Y', moo: 'N', sma: 'Y', cmm: 'N', mre: 'Y', dae: 'N', ppe: 'Y', subEnd: '2026-12-31', suppEnd: '2027-01-01', actDate: '2025-01-10', desc: 'Main HQ License' },
  { state: 'Active', id: 'LIC-002', type: 'Standard', act: 'N', psm: 'Y', vem: 'N', cam: 'N', atm: 'Y', mem: 'N', moo: 'Y', sma: 'N', cmm: 'Y', mre: 'N', dae: 'Y', ppe: 'N', subEnd: '2026-06-30', suppEnd: '2026-07-01', actDate: '2025-05-15', desc: 'Regional Branch' },
  { state: 'Expired', id: 'LIC-003', type: 'Trial', act: 'Y', psm: 'Y', vem: 'Y', cam: 'N', atm: 'N', mem: 'N', moo: 'N', sma: 'N', cmm: 'N', mre: 'N', dae: 'N', ppe: 'N', subEnd: '2025-12-01', suppEnd: '2025-12-01', actDate: '2025-11-01', desc: 'Test Instance' },
  { state: 'Active', id: 'LIC-004', type: 'Premium', act: 'Y', psm: 'Y', vem: 'Y', cam: 'Y', atm: 'Y', mem: 'Y', moo: 'Y', sma: 'Y', cmm: 'Y', mre: 'Y', dae: 'Y', ppe: 'Y', subEnd: '2027-01-01', suppEnd: '2027-01-01', actDate: '2026-01-05', desc: 'Full Access' },
  { state: 'Active', id: 'LIC-005', type: 'Standard', act: 'Y', psm: 'N', vem: 'N', cam: 'Y', atm: 'N', mem: 'Y', moo: 'N', sma: 'Y', cmm: 'N', mre: 'Y', dae: 'N', ppe: 'N', subEnd: '2026-08-15', suppEnd: '2026-08-16', actDate: '2026-02-10', desc: 'Project Alpha' }
];



}
