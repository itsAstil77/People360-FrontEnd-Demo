import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance',
  imports: [CommonModule],
  templateUrl: './attendance.html',
  styleUrl: './attendance.css',
})
export class Attendance {








activeTab: string = 'work'; // default tab

setTab(tab: string) {
  this.activeTab = tab;
}



}
