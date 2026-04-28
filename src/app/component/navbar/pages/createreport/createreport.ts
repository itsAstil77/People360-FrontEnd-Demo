import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




  interface NavNode {
  name: string;
  expanded?: boolean;
  children?: NavNode[];
}



@Component({
  selector: 'app-createreport',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './createreport.html',
  styleUrl: './createreport.css',
})


export class Createreport {




  selectedNode: string = 'Track People';
  currentMapImage: string = 'assets/map.png';





  locations: NavNode[] = [
    {
      name: 'Track People',
      children: [
        {
          name: 'UAE',
          children: [
            {
              name: 'Oman',
              children: [
                {
                  name: 'Street One',
                  children: [
                    {
                      name: 'Second Colony',

                      children: [
                        {
                          name: 'Third Right',
                          children: [{ name: 'Azy floor' }]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];


  selectNode(node: NavNode): void {
    node.expanded = !node.expanded;
    this.selectedNode = node.name;
  }

  // Time range
  timeOptions = ['1 Hours', '2 Hours', '4 Hours', '8 Hours', '24 Hours'];
  selectedTime = '1 Hours';

  // Report
  reportName = '';

  // Modules
  modules = [
    'Visitor & Entrance Management',
    'Attendance',
    'OT Management',
    'Meal Management',
    'Patrol Management',
    'Personal Supervision',
    'Customer Analytics',
    'Evacuation'


    // ot management=staff patient equpiment ot 
  ];
  selectedModule = '';

  // Format
  selectedFormat = 'url';

  // Recurrence
  selectedRecurrence = 'once';
  dailyTime = '';
  weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  weeklyDay = 'Monday';
  weeklyTime = '';
  monthlyDate = '';
  monthlyTime = '';

  // Share
  shareEmails = '';

  onCancel() {
    // handle cancel
  }

  onGenerate() {
    // handle generate
  }


selectedTemplate: string = '';


getTemplates(): string[] {
  switch (this.selectedModule) {

    case 'OT Management':
      return ['Staff', 'Patient', 'Equipment', 'OT'];

    case 'Meal Management':
      return ['Visitor Meal', 'Employee Meal', 'Contractor Meal', 'Meal Token'];

    case 'Patrol Management':
      return ['Object People', 'Attendance', 'Zone'];

    case 'Attendance':
      return ['People Based', 'Zone Based'];

    default:
      return [];
  }
}

}

