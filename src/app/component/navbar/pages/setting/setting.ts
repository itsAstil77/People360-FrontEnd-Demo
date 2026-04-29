import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-setting',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting {











  activePageTab = 'visitor-panel';











  bgImagePreview: string | null = null;
logoPreview: string | null = null;

visitorPanel = {
  panelName: 'TCS',
  companyName: 'TCS',
  approval: true,
  authCode: true
};

onBgImageUpload(event: any) {
  const file = event.target.files[0];
  if (file && file.size <= 500 * 1024) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.bgImagePreview = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert('File size must be under 500kb');
  }
}

onLogoUpload(event: any) {
  const file = event.target.files[0];
  if (file && file.size <= 500 * 1024) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.logoPreview = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert('File size must be under 500kb');
  }
}

saveVisitorPanel() {
  console.log('Saved:', this.visitorPanel);
}

cancelVisitorPanel() {
  this.visitorPanel = {
    panelName: '',
    companyName: '',
    approval: false,
    authCode: false
  };
  this.bgImagePreview = null;
  this.logoPreview = null;
}









approvalSearch = '';

approvals = [
  {
    precedenceNo: 2,
    permitType: 'Visitor permit',
    emailId: 'gokulajith1781996@gmail.com',
    createdAt: '2025-07-14 15:18:40'
  },
  {
    precedenceNo: 1,
    permitType: 'Visitor permit',
    emailId: 'astil.mathew@gmail.com',
    createdAt: '2025-07-14 15:18:02'
  }
];

get filteredApprovals() {
  return this.approvals.filter(a =>
    a.emailId.toLowerCase().includes(this.approvalSearch.toLowerCase()) ||
    a.permitType.toLowerCase().includes(this.approvalSearch.toLowerCase())
  );
}




identificationSearch = '';

idType = {
  manual: false,
  automatic: false,
  hybrid: false
};

identifications = [
  {
    name: '1',
    readerId: '6606899794706314b166e4bb',
    entryExit: 'Entry1',
    readerName: 'Test',
    type: 'Automatic',
    createdAt: '2024-06-17 13:33:43'
  }
];

// get filteredIdentifications() {
//   return this.identifications.filter(item => {
//     const matchesSearch = item.name.toLowerCase().includes(this.identificationSearch.toLowerCase()) ||
//       item.readerName.toLowerCase().includes(this.identificationSearch.toLowerCase());

//     const matchesType =
//       (this.idType.automatic && item.type === 'Automatic') ||
//       (this.idType.hybrid && item.type === 'Hybrid');

//     return matchesSearch && matchesType;
//   });
// }







idTypeSelected = 'manual';  // ✅ default selection

get filteredIdentifications() {
  return this.identifications.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(this.identificationSearch.toLowerCase()) ||
      item.readerName.toLowerCase().includes(this.identificationSearch.toLowerCase());

    const matchesType =
      (this.idTypeSelected === 'automatic' && item.type === 'Automatic') ||
      (this.idTypeSelected === 'hybrid' && item.type === 'Hybrid');

    return matchesSearch && matchesType;
  });
}






















// ReconcileSearch = '';

Reconcile = [
  {
    visitors: 5,
    peopleExited: '546',
    physicallyPass: '11',
    empno:'41',
    createdAt: '2025-07-14 15:18:40'
  },
  {
   visitors: 7,
    peopleExited: '96',
    physicallyPass: '9',
    empno:'6',
    createdAt: '2025-07-14 15:18:02'
  }
];

// get filteredReconcile() {
//   return this.Reconcile.filter(a =>
//     a.emailId.toLowerCase().includes(this.ReconcileSearch.toLowerCase()) ||
//     a.permitType.toLowerCase().includes(this.ReconcileSearch.toLowerCase())
//   );
// }












clientInfo = {
  clientName: 'Acme Corporation',
  supportContact: '+1 800 123 4567',
  securityContact: '+1 800 987 6543',
  fireContact: '+1 800 555 0199',
  emailId: 'support@purpleIq.com'
};

saveClientInfo() {
  console.log('Client Info Saved:', this.clientInfo);
}

cancelClientInfo() {
  this.clientInfo = {
    clientName: '',
    supportContact: '',
    securityContact: '',
    fireContact: '',
    emailId: ''
  };
}









activeRegTab = 'individual';












Individual = [
  {
    firstName: 'bala',
    lastName: 'max',
    mobileNO: '13456541',
    email:'balamax@gmail.com',
    idType: 'Passport(EID)',
    idNo:'679',
    status:'Approved'
  },
  {
    firstName: 'ajithbala',
    lastName: 'rock',
    mobileNO: '565434534',
    email:'ajithbala@gmail.com',
    idType: 'Passport(EID)',
    idNo:'690',
    status:'Approved'
  }
];



}
