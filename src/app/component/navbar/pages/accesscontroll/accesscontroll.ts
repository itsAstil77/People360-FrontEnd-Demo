import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accesscontroll',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './accesscontroll.html',
  styleUrl: './accesscontroll.css',
})
export class Accesscontroll {













  activeTab = 'groups';
groupSearch = '';
accessSearch = '';

groups = [
  { name: 'TESTING 1', employees: ['Test Emp 1-8767', 'Test Emp 2-9908'], type: 'Employee' },
  { name: 'f', employees: ['New Test-420006'], type: 'Employee' },
  { name: 'sample testing data', employees: ['Bala subhraminiyam Thrissur-34534534', 'New Test-420006'], type: 'Employee' },
  { name: 'New Access', employees: ['Jenkins Roch-32145', 'Bala subhraminiyam Thrissur-34534534', 'SHAIMA YOUSUF-47199'], type: 'Employee' },
  { name: 'BALA', employees: ['Demo user user-123', 'Wewe ewe-12368', 'SHAIMA YOUSUF-47199'], type: 'Employee' },
  { name: 'BALA', employees: ['New Test-420006', 'Demo user user-123', 'Emp 1-5001', 'Jonathan Bane-1011'], type: 'Employee' },
  { name: 'BTS', employees: ['ttt R'], type: 'Visitor' },
  { name: 'newer', employees: [], type: 'Visitor' },
  { name: 'tester', employees: ['ttt R'], type: 'Visitor' },
  { name: 'testing', employees: [], type: 'Visitor' },
];

accessList = [
  { groupName: 'fffffffffff', groupType: 'Contractor', readers: [], location: '', status: false },
  { groupName: 'hhh', groupType: 'Contractor', readers: [], location: '', status: false },
  { groupName: 'f', groupType: 'Employee', readers: [], location: '', status: false },
  { groupName: 'new employee', groupType: 'Employee', readers: [], location: '', status: false },
  { groupName: 'BALA', groupType: 'Employee', readers: [], location: '', status: false },
  { groupName: 'test', groupType: 'Employee', readers: [], location: '', status: false },
  { groupName: 'new', groupType: 'Employee', readers: [], location: '', status: false },
  { groupName: 'BALA', groupType: 'Employee', readers: [], location: '', status: false },
  { groupName: 'BTS', groupType: 'Visitor', readers: [], location: '', status: false },
  { groupName: 'newer', groupType: 'Visitor', readers: ['Gate 1 Out Device', 'rrr', 'dfgf'], location: '', status: true },
];

get filteredGroups() {
  return this.groups.filter(g =>
    g.name.toLowerCase().includes(this.groupSearch.toLowerCase())
  );
}

get filteredAccess() {
  return this.accessList.filter(a =>
    a.groupName.toLowerCase().includes(this.accessSearch.toLowerCase())
  );
}

toggleStatus(access: any) {
  access.status = !access.status;
}


onEditGroup() {}
onDeleteGroup() {}
// onCreateAccess() {}
onEditAccess() {}
onDeleteAccess() {}



















showAddAccessPopup = false;

newAccess: any = {
  type: 'Employee',
  groupName: '',
  members: '',
  readers: '',
  status: true,
  schedules: [
    { fromDate: '', fromHH: '', fromMM: '', toDate: '', toHH: '', toMM: '' }
  ]
};

onCreateGroup() {
this.showAddGroupPopup = true;
}

closeAddAccessPopup(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
    this.showAddAccessPopup = false;
  }
}

addSchedule() {
  this.newAccess.schedules.push({
    fromDate: '', fromHH: '', fromMM: '',
    toDate: '', toHH: '', toMM: ''
  });
}

saveAccess() {
  console.log('Saved:', this.newAccess);
  this.showAddAccessPopup = false;
}

clearAccess() {
  this.newAccess = {
    type: 'Employee',
    groupName: '',
    members: '',
    readers: '',
    status: true,
    schedules: [
      { fromDate: '', fromHH: '', fromMM: '', toDate: '', toHH: '', toMM: '' }
    ]
  };
}











removeSchedule(index: number) {
  this.newAccess.schedules.splice(index, 1);
}












showAddGroupPopup = false;

newGroup: any = {
  type: 'Employee',
  name: '',
  members: ''
};

onCreateAccess() {
   this.showAddAccessPopup = true;
}

closeAddGroupPopup(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
    this.showAddGroupPopup = false;
  }
}

saveGroup() {
  console.log('Group saved:', this.newGroup);
  this.showAddGroupPopup = false;
}

clearGroup() {
  this.newGroup = {
    type: 'Employee',
    name: '',
    members: ''
  };
}
















showEditGroupPopup = false;
editGroup: any = null;

openEditGroup(group: any) {
  // ✅ deep copy so original is not affected until save
  this.editGroup = {
    ...group,
    employees: [...group.employees]
  };
  this.showEditGroupPopup = true;
}

closeEditGroupPopup(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
    this.showEditGroupPopup = false;
  }
}

addMember() {
  this.editGroup.employees.push('');
}

removeMember(index: number) {
  this.editGroup.employees.splice(index, 1);
}

updateGroup() {
  // ✅ find and update original group
  const index = this.groups.findIndex(g => g.name === this.editGroup.name);
  if (index > -1) {
    this.groups[index] = { ...this.editGroup };
  }
  this.showEditGroupPopup = false;
}


















showEditAccessPopup = false;
editAccess: any = null;

// openEditAccess(access: any) {
 
//   this.editAccess = {
//     ...access,
//     readers: [...access.readers]
//   };
//   this.showEditAccessPopup = true;
// }

closeEditAccessPopup(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
    this.showEditAccessPopup = false;
  }
}

addReader() {
  this.editAccess.readers.push('');
}

removeReader(index: number) {
  this.editAccess.readers.splice(index, 1);
}

updateAccess() {
  // ✅ find and update original access
  const index = this.accessList.findIndex(
    a => a.groupName === this.editAccess.groupName
  );
  if (index > -1) {
    this.accessList[index] = { ...this.editAccess };
  }
  this.showEditAccessPopup = false;
}

openEditAccess(access: any) {
  this.editAccess = {
    ...access,
    readers: [...access.readers],
    schedules: access.schedules ? [...access.schedules] : [  // ✅ keep existing or default
      { fromDate: '', fromHH: '', fromMM: '', toDate: '', toHH: '', toMM: '' }
    ]
  };
  this.showEditAccessPopup = true;
}

addEditSchedule() {
  this.editAccess.schedules.push({
    fromDate: '', fromHH: '', fromMM: '',
    toDate: '', toHH: '', toMM: ''
  });
}

removeEditSchedule(index: number) {
  this.editAccess.schedules.splice(index, 1);
}

}
