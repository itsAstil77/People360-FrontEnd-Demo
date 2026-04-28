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
  selector: 'app-createprocessandautomation',
  imports: [CommonModule,FormsModule,RouterModule
  ],
  templateUrl: './createprocessandautomation.html',
  styleUrl: './createprocessandautomation.css',
})

export class Createprocessandautomation {
  

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














maxConditions = 3;

conditions: any[] = [
  { name: 'A', value: '', operator: 'AND' }
];

// ADD CONDITION (LIMITED)
addCondition() {
  if (this.conditions.length >= this.maxConditions) return;

  const nextChar = String.fromCharCode(65 + this.conditions.length); // B, C
  this.conditions.push({
    name: nextChar,
    value: '',
    operator: 'AND'
  });
}

// REMOVE CONDITION
removeCondition(index: number) {
  this.conditions.splice(index, 1);
}

// RELATIONSHIP TEXT
getRelationship(): string {
  if (this.conditions.length === 1) return 'A';

  let relation = this.conditions[0].name;

  for (let i = 1; i < this.conditions.length; i++) {
    relation += this.conditions[i].operator + this.conditions[i].name;
  }

  return relation;
}




isTimeEnabled: boolean = false;













actions: any[] = [
  { name: 'A', value: '', type: '', showDropdown: false }
];

// ADD
addAction() {
  const nextChar = String.fromCharCode(65 + this.actions.length);
  if (this.actions.length < 3) {
    this.actions.push({
      name: nextChar,
      value: '',
      type: '',
      showDropdown: false
    });
  }
}

// REMOVE
removeAction(i: number) {
  this.actions.splice(i, 1);
}

// SHOW DROPDOWN
// openDropdown(action: any) {
//   action.showDropdown = true;
// }

openDropdown(cond: any) {
  // close all dropdowns first
  this.conditions.forEach(c => c.showDropdown = false);

  // open only clicked one
  cond.showDropdown = true;
}

// SELECT OPTION
// selectType(action: any, type: string) {
//   action.type = type;
//   action.showDropdown = false;
// }

selectType(action: any, type: string) {
  const map: any = {
    trigger: 'Trigger device(s) to..',
    alarm: 'Send an alarm notification'
  };

  action.type = type;
  action.value = map[type];
  action.showDropdown = false;
}


// selectCondition(cond: any, value: string) {
//   cond.value = value;
//   cond.showDropdown = false;
// }














openSubDropdown(action: any, type: string) {
  // close all first
  action.showDeviceDropdown = false;
  action.showTypeDropdown = false;
  action.showStatusDropdown = false;

  if (type === 'device') action.showDeviceDropdown = true;
  if (type === 'type') action.showTypeDropdown = true;
  if (type === 'status') action.showStatusDropdown = true;
}

/* FIRST SELECT */
selectDevice(action: any, value: string) {
  action.device = value;
  action.showDeviceDropdown = false;

  // reset next fields
  action.deviceType = '';
  action.status = '';
}

/* SECOND SELECT */
selectTypeValue(action: any, value: string) {
  action.deviceType = value;
  action.showTypeDropdown = false;

  // reset third
  action.status = '';
}

/* THIRD SELECT */
selectStatus(action: any, value: string) {
  action.status = value;
  action.showStatusDropdown = false;
}











// selectCondition(cond: any, type: string) {
//   cond.type = type;
//   cond.showDropdown = false;


//   cond.zone = '';
//   cond.metric = '';
//   cond.operatorValue = '';

//   cond.startTime = '';
//   cond.endTime = '';
// }

selectCondition(cond: any, type: string) {
  cond.type = type;

  // ✅ SET TEXT TO SHOW IN INPUT
  if (type === 'device') cond.value = 'When the device is';
  if (type === 'time') cond.value = 'When the time is';
  if (type === 'people') cond.value = 'When the people is';
  if (type === 'zone') cond.value = 'When the zone is';

  // close dropdown
  cond.showDropdown = false;

  // reset sub selections (optional but recommended)
  cond.zone = '';
  cond.metric = '';
  cond.operatorValue = '';
}

/* OPEN SUB DROPDOWN */
openSub(cond: any, type: string) {
  cond.showZone = false;
  cond.showMetric = false;
  cond.showOperator = false;

  if (type === 'zone') cond.showZone = true;
  if (type === 'metric') cond.showMetric = true;
  if (type === 'operator') cond.showOperator = true;
}

/* SELECT FUNCTIONS */
selectZone(cond: any, val: string) {
  cond.zone = val;
  cond.showZone = false;
  cond.metric = '';
  cond.operatorValue = '';
}

selectMetric(cond: any, val: string) {
  cond.metric = val;
  cond.showMetric = false;
  cond.operatorValue = '';
}

selectOperator(cond: any, val: string) {
  cond.operatorValue = val;
  cond.showOperator = false;
}














toggleDay(cond: any, day: string) {
  if (!cond.selectedDays) cond.selectedDays = [];
  const index = cond.selectedDays.indexOf(day);
  if (index > -1) {
    cond.selectedDays.splice(index, 1);  // deselect
  } else {
    cond.selectedDays.push(day);          // select
  }
}





}

