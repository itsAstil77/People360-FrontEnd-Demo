import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-visitorpermit',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './visitorpermit.html',
  styleUrl: './visitorpermit.css',
})
export class Visitorpermit {










  activeTab: string = 'visitor'; // default active

  setTab(tab: string) {
    this.activeTab = tab;
  }

  getTitle(): string {
    if (this.activeTab === 'visitor') return 'Manage Visitor Permit';
    if (this.activeTab === 'material') return 'Manage Material Permit';
    if (this.activeTab === 'exit') return 'Manage Exit Permit';
    return '';
  }



  subTab: string = 'pending';

  setSubTab(tab: string) {
    this.subTab = tab;
  }















  showViewPopup = false;
  selectedRow: any = null;

  openViewPopup() {
    // ✅ hardcoded sample data since no API yet
    this.selectedRow = {
      visitorName: 'John',
      email: 'john@mail.com',
      startDate: '01-01-2026',
      endDate: '02-01-2026',
      phone: '9876543210',
      companyName: 'ABC Ltd',
      visitReason: 'Meeting',
      visitTime: '10:00 AM',
      department: 'IT Dept',
      contactName: 'Ravi',
      hostCompany: 'XYZ',
      companyEmail: 'ravi@mail.com',
      vehicleName: 'Car',
      vehicleId: 'TN01AB1234',
      authCode: 'AUTH123',
      status: 'Pending',
      remarks: '-',
      description: '',
      documents: [
        { type: 'Photo', number: '', expiry: '', image: null },
        { type: 'Passport(EID)', number: '158', expiry: '2025-05-01', image: null },
        { type: 'Visa', number: '', expiry: '', image: null },
        { type: 'Supporting Docs', number: '', expiry: '', image: null },
        { type: 'National ID', number: '', expiry: '', image: null }
      ],
      tools: [
        { name: 'Laptop', serialNo: '', quantity: 1, returnable: 'Yes', remarks: '-', status: 'Pending', email: '', timestamp: '' }
      ]
    };
    this.showViewPopup = true;
  }

  closePopup(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
      this.showViewPopup = false;
    }
  }












  openApprovedPopup() {
    this.selectedRow = {
      visitorName: 'Navin - P',
      email: '',
      startDate: '2025-12-22 05:30:00',
      endDate: '2025-12-25 05:30:00',
      phone: '789696787',
      companyName: 'TCS',
      visitReason: 'Testing',
      visitTime: '18:10',
      department: 'PIQ Dept',
      contactName: 'Navin - P',
      hostCompany: '',
      companyEmail: '',
      vehicleName: 'Kia',
      vehicleId: '7896',
      authCode: 'VPRN20251222-0584',
      status: 'Approved',
      remarks: '',
      description: '',
      // documents: [
      //   { type: 'Photo', number: '', expiry: '', image: null },
      //   { type: 'Passport(EID)', number: '534523543', expiry: '2025-12-23', image: null },
      //   { type: 'Visa', number: '', expiry: '', image: null },
      //   { type: 'Supporting Docs', number: '', expiry: '', image: null },
      //   { type: 'National ID', number: '', expiry: '', image: null }
      // ],


      documents: [
        {
          type: 'Photo',
          number: '',
          expiry: '',
          image: 'assets/aiboy.png'  // ✅ your image path
        },
        {
          type: 'Passport(EID)',
          number: '158',
          expiry: '2025-05-01',
          image: 'assets/aigirl.png'  // ✅ your image path
        },
        {
          type: 'Visa',
          number: '',
          expiry: '',
          image: null  // ✅ null = shows "No Image Available"
        },
        {
          type: 'Supporting Docs',
          number: '',
          expiry: '',
          image: null
        },
        {
          type: 'National ID',
          number: '',
          expiry: '',
          image: null
        }
      ],
      // tools: [
      //   { name: '', serialNo: '', quantity: '', returnable: '', remarks: '', status: '', email: '', timestamp: '' }
      tools: [
        {
          name: 'Laptop',
          serialNo: '64754',
          quantity: '1',
          returnable: 'No',
          remarks: 'return',
          status: 'Partially',
          email: '',
          timestamp: '2025-12-22'
        },
        {
          name: 'Charger',
          serialNo: '7582',
          quantity: '7',
          returnable: 'Yes',
          remarks: 'return yes',
          status: 'Fully Ret',
          email: 'rkumar',
          timestamp: '2025-12-22'
        }
      ]

    };
    this.showViewPopup = true;
  }


  onImageUpload(event: any, doc: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        doc.image = e.target.result;  // ✅ sets base64 image to show preview
      };
      reader.readAsDataURL(file);
    }
  }















  // material





  showPermitPopup = false;
permitRow: any = null;

openPermitPopup() {
  this.permitRow = {
    passport: 'Passport(EID)',
    fullName: 'John',
    idNo: '10',
    permitRefNo: 'MPRN20250605-0143',
    phone: '9876543210',
    reason: 'Meeting',
    status: 'Pending',
    gatepassRefNo: 'VPRN20250411-0557',
    companyName: 'TCS',
    companyEmail: '',
    remarks: '',
    description: '',
    materials: [
      {
        description: 'Lite',
        serialNo: '2446',
        quantity: '2',
        referenceNo: '643',
        returnable: 'Yes',
        remarks: 'no',
        supportingDocNo: 'hexa',
        status: 'active',
        email: '',
        timestamp: '03:12:2026'
      }
    ]
  };
  this.showPermitPopup = true;
}

closePermitPopup(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
    this.showPermitPopup = false;
  }
}

















showMaterialPopup = false;
materialRow: any = null;

openMaterialPopup() {
  this.materialRow = {
    idType: 'Passport(EID)',
    fullName: 'John',
    idNo: '10',
    permitRefNo: 'MPRN20250617-0145',
    phone: '9876543210',
    reason: 'Test',
    status: 'Approved',
    gatepassRefNo: 'VPRN20250411-0557',
    companyName: 'TCS',
    companyEmail: '',
    remarks: '',
    description: '',
    materials: [
      {
        description: '10',
        serialNo: '10',
        quantity: '10',
        referenceNo: '10',
        returnable: 'Yes',
        remarks: '10',
        supportingDocNo: '10',
        status: '',
        email: '',
        timestamp: '2025-06-17 15:43:58'
      },
      {
        description: '10',
        serialNo: '5',
        quantity: '10',
        referenceNo: '',
        returnable: 'Yes',
        remarks: '10',
        supportingDocNo: '',
        status: 'Partially Returned',
        email: 'astil.mathew@gmail.com',
        timestamp: '2025-12-16 14:26:20'
      }
    ]
  };
  this.showMaterialPopup = true;
}

closeMaterialPopup(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
    this.showMaterialPopup = false;
  }
}







showExitPopup = false;
exitRow: any = null;

openExitPopup() {
  this.exitRow = {
    idType: 'Passport(EID)',
    idNo: '10',
    name: 'John',
    companyName: 'TCS',
    companyEmail: '',
    status: 'Pending',
    exitPermitNo: 'EPRN20250609-0085',
    gatePassNo: 'VPRN20250411-0557',
    createdDate: '2025-06-09T04:23:22.027Z',
    validFrom: '2025-06-09T00:00:00Z',
    validTo: '2025-06-09T00:00:00Z',
    equipmentType: '001010',
    portName: 'Foulath',
    chassisNo: '104141',
    plateNo: '41021402',
    plateRegister: '4104',
    remarks: '',
    description: '',
    materials: [
      {
        description: '',
        serialNo: '',
        quantity: '',
        referenceNo: '',
        returnable: '',
        remarks: '',
        status: '',
        email: '',
        timestamp: ''
      }
    ]
  };
  this.showExitPopup = true;
}

closeExitPopup(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
    this.showExitPopup = false;
  }
}










showExitApprovedPopup = false;
exitApprovedRow: any = null;

openExitApprovedPopup() {
  this.exitApprovedRow = {
    idType: 'Passport(EID)',
    idNo: '10',
    name: 'John',
    companyName: 'TCS',
    companyEmail: '',
    status: 'Approved',
    exitPermitNo: 'EPRN20250605-0082',
    gatePassNo: 'VPRN20250411-0557',
    createdDate: '2025-06-05T10:44:24.913Z',
    validFrom: '2025-06-13T00:00:00Z',
    validTo: '2025-06-17T00:00:00Z',
    equipmentType: '1',
    portName: 'ZZY',
    chassisNo: '214345',
    plateNo: '4153543',
    plateRegister: '154325423',
    remarks: '',
    description: '',
    materials: [
      {
        description: '',
        serialNo: '',
        quantity: '',
        referenceNo: '',
        returnable: '',
        remarks: '',
        status: '',
        email: '',
        timestamp: ''
      }
    ]
  };
  this.showExitApprovedPopup = true;
}

closeExitApprovedPopup(event: MouseEvent) {
  if ((event.target as HTMLElement).classList.contains('popup-overlay')) {
    this.showExitApprovedPopup = false;
  }
}













}
