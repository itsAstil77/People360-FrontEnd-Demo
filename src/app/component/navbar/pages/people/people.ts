import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-people',
  imports: [CommonModule],
  templateUrl: './people.html',
  styleUrl: './people.css',
})
export class People {


activeTab: string = 'employee';
  resourceData = [
  {
    FirstName: 'Amit',
    LastName: 'Sharma',
    StartDate: '02-01-2025',
    EndDate: '01-01-2027',
    Company: 'TechSol UAE',
    Department: 'IT Support',
    NationalId: '784-1985-1234567-1',
    SOW_VehicleId: 'SOW-DXB-001',
    Designation: 'System Engineer',
    IDNumber: 'EMP-501',
    PhoneNo: '+971 50 123 4567',
    CardBadge: 'B-9921',
    Status: 'Active'
  },
  {
    FirstName: 'Sarah',
    LastName: 'Jasmine',
    StartDate: '15-03-2025',
    EndDate: '14-03-2026',
    Company: 'Purple IQ',
    Department: 'Operations',
    NationalId: '784-1992-7654321-2',
    SOW_VehicleId: 'DXB-V-442',
    Designation: 'Project Manager',
    IDNumber: 'EMP-502',
    PhoneNo: '+971 52 987 6543',
    CardBadge: 'B-4432',
    Status: 'Active'
  },
  {
    FirstName: 'Vikram',
    LastName: 'Singh',
    StartDate: '10-01-2024',
    EndDate: '09-01-2026',
    Company: 'MediGroup',
    Department: 'Maintenance',
    NationalId: '784-1980-1122334-5',
    SOW_VehicleId: 'SOW-AUH-992',
    Designation: 'Technician',
    IDNumber: 'EMP-503',
    PhoneNo: '+971 55 112 2334',
    CardBadge: 'B-1120',
    Status: 'Inactive'
  },
  {
    FirstName: 'Elena',
    LastName: 'Gilbert',
    StartDate: '20-05-2025',
    EndDate: '19-05-2027',
    Company: 'TechSol UAE',
    Department: 'Admin',
    NationalId: '784-1995-8877665-3',
    SOW_VehicleId: 'SOW-DXB-005',
    Designation: 'Coordinator',
    IDNumber: 'EMP-504',
    PhoneNo: '+971 56 445 5667',
    CardBadge: 'B-8876',
    Status: 'Active'
  },
  {
    FirstName: 'Raj',
    LastName: 'Malhotra',
    StartDate: '01-08-2025',
    EndDate: '31-07-2026',
    Company: 'Purple IQ',
    Department: 'Software',
    NationalId: '784-1988-5544332-1',
    SOW_VehicleId: 'DXB-V-101',
    Designation: 'Developer',
    IDNumber: 'EMP-505',
    PhoneNo: '+971 50 554 4332',
    CardBadge: 'B-3345',
    Status: 'Active'
  },
  {
    FirstName: 'Chloe',
    LastName: 'Sullivan',
    StartDate: '12-02-2026',
    EndDate: '11-02-2028',
    Company: 'MediGroup',
    Department: 'Quality',
    NationalId: '784-1990-2233445-9',
    SOW_VehicleId: 'SOW-SHJ-771',
    Designation: 'Specialist',
    IDNumber: 'EMP-506',
    PhoneNo: '+971 58 223 3445',
    CardBadge: 'B-5521',
    Status: 'On Leave'
  }
];


contractorData = [
  {
    ContractorName: 'Zayed Al-Hassan',
    ContractorId: 'CON-7701',
    VehicleId: 'V-DXB-8821',
    VehicleName: 'Toyota Hiace',
    CompanyName: 'Al-Futtaim Logistics',
    ProjectName: 'OT Management',
    Address: 'Office 402, Business Bay, Dubai',
    StartDate: '01-01-2025',
    EndDate: '31-12-2025',
    PhoneNo: '+971 50 111 2222',
    Nationality: 'UAE',
    Status: 'Active'
  },
  {
    ContractorName: 'John Richards',
    ContractorId: 'CON-7702',
    VehicleId: 'V-SHJ-4432',
    VehicleName: 'Nissan Urvan',
    CompanyName: 'Speedy Delivery Services',
    ProjectName: 'OT Management',
    Address: 'Warehouse 12, Industrial Area 4, Sharjah',
    StartDate: '15-02-2025',
    EndDate: '14-02-2026',
    PhoneNo: '+971 52 333 4444',
    Nationality: 'UK',
    Status: 'Active'
  },
  {
    ContractorName: 'Mohamed Salah',
    ContractorId: 'CON-7703',
    VehicleId: 'V-AUH-9901',
    VehicleName: 'Mercedes Sprinter',
    CompanyName: 'Global Hospital Supplies',
    ProjectName: 'OT Management',
    Address: 'Al Reem Island, Abu Dhabi',
    StartDate: '10-01-2024',
    EndDate: '09-01-2026',
    PhoneNo: '+971 55 555 6666',
    Nationality: 'Egypt',
    Status: 'Inactive'
  },
  {
    ContractorName: 'Rahul Verma',
    ContractorId: 'CON-7704',
    VehicleId: 'V-DXB-1002',
    VehicleName: 'Ford Transit',
    CompanyName: 'TechFix Maintenance',
    ProjectName: 'OT Management',
    Address: 'Silicon Oasis, Dubai',
    StartDate: '01-03-2025',
    EndDate: '01-03-2026',
    PhoneNo: '+971 56 777 8888',
    Nationality: 'India',
    Status: 'Active'
  },
  {
    ContractorName: 'Philip Moore',
    ContractorId: 'CON-7705',
    VehicleId: 'V-AJM-5512',
    VehicleName: 'Hyundai H1',
    CompanyName: 'Pure Air Solutions',
    ProjectName: 'OT Management',
    Address: 'Free Zone, Ajman',
    StartDate: '20-11-2024',
    EndDate: '19-11-2025',
    PhoneNo: '+971 54 888 9999',
    Nationality: 'USA',
    Status: 'Active'
  },
  {
    ContractorName: 'Ali Reza',
    ContractorId: 'CON-7706',
    VehicleId: 'V-RAK-3321',
    VehicleName: 'Isuzu NPR',
    CompanyName: 'Elite Med Logistics',
    ProjectName: 'OT Management',
    Address: 'Ras Al Khaimah Port',
    StartDate: '01-06-2025',
    EndDate: '31-12-2026',
    PhoneNo: '+971 50 222 3333',
    Nationality: 'Iran',
    Status: 'Expired'
  }
];


visitorData = [
  {
    FirstName: 'Mark',
    LastName: 'Zucker',
    StartDate: '09-04-2026',
    EndDate: '09-04-2026',
    CompanyToVisit: 'TechSol UAE',
    DeptToVisit: 'IT Infrastructure',
    NationalId: '784-1990-1234567-1',
    SOW_VehicleId: 'DXB-V-112',
    IDNumber: 'VIS-001',
    PhoneNo: '+971 50 111 2222',
    BadgeNo: 'V-990',
    Email: 'mark.z@meta.com',
    VisitorCompany: 'Meta Solutions',
    DocType: 'Emirates ID',
    DocId: 'EID-77210',
    AuthCode: 'AUTH-9921',
    Status: 'In-Premise'
  },
  {
    FirstName: 'Sara',
    LastName: 'Khan',
    StartDate: '10-04-2026',
    EndDate: '12-04-2026',
    CompanyToVisit: 'MediGroup',
    DeptToVisit: 'Admin',
    NationalId: '784-1995-9988776-2',
    SOW_VehicleId: 'N/A',
    IDNumber: 'VIS-002',
    PhoneNo: '+971 52 444 5555',
    BadgeNo: 'V-991',
    Email: 'sara.k@outlook.com',
    VisitorCompany: 'Freelance',
    DocType: 'Passport',
    DocId: 'P-992288',
    AuthCode: 'AUTH-1102',
    Status: 'Approved'
  },
  {
    FirstName: 'David',
    LastName: 'Miller',
    StartDate: '08-04-2026',
    EndDate: '08-04-2026',
    CompanyToVisit: 'Purple IQ',
    DeptToVisit: 'Software',
    NationalId: '784-1988-5566443-3',
    SOW_VehicleId: 'AUH-V-887',
    IDNumber: 'VIS-003',
    PhoneNo: '+971 55 666 7777',
    BadgeNo: 'V-992',
    Email: 'd.miller@gmail.com',
    VisitorCompany: 'Cloud Nine Tech',
    DocType: 'Driving License',
    DocId: 'DL-5521',
    AuthCode: 'AUTH-5542',
    Status: 'Checked-Out'
  },
  {
    FirstName: 'Lina',
    LastName: 'Chen',
    StartDate: '09-04-2026',
    EndDate: '09-04-2026',
    CompanyToVisit: 'TechSol UAE',
    DeptToVisit: 'Finance',
    NationalId: '784-1992-3322110-5',
    SOW_VehicleId: 'N/A',
    IDNumber: 'VIS-004',
    PhoneNo: '+971 56 888 9999',
    BadgeNo: 'V-993',
    Email: 'lina.chen@finance.com',
    VisitorCompany: 'Deloitte',
    DocType: 'Emirates ID',
    DocId: 'EID-11002',
    AuthCode: 'AUTH-8821',
    Status: 'In-Premise'
  },
  {
    FirstName: 'James',
    LastName: 'Wilson',
    StartDate: '11-04-2026',
    EndDate: '11-04-2026',
    CompanyToVisit: 'MediGroup',
    DeptToVisit: 'Pharmacy',
    NationalId: '784-1982-6655443-9',
    SOW_VehicleId: 'DXB-V-443',
    IDNumber: 'VIS-005',
    PhoneNo: '+971 58 222 3333',
    BadgeNo: 'V-994',
    Email: 'j.wilson@pharma.com',
    VisitorCompany: 'Pfizer UAE',
    DocType: 'Emirates ID',
    DocId: 'EID-66512',
    AuthCode: 'AUTH-0012',
    Status: 'Pending'
  },
  {
    FirstName: 'Anita',
    LastName: 'Desai',
    StartDate: '09-04-2026',
    EndDate: '15-04-2026',
    CompanyToVisit: 'Purple IQ',
    DeptToVisit: 'Operations',
    NationalId: '784-1991-0011223-4',
    SOW_VehicleId: 'SOW-991',
    IDNumber: 'VIS-006',
    PhoneNo: '+971 50 999 8888',
    BadgeNo: 'V-995',
    Email: 'anita.d@consult.com',
    VisitorCompany: 'KPMG',
    DocType: 'Emirates ID',
    DocId: 'EID-44321',
    AuthCode: 'AUTH-3321',
    Status: 'Approved'
  }
];

showEmpAddPopup:boolean=false
closeEmpAddPopup(){
  this.showEmpAddPopup=false
}
createEmpAddPopup(){
  this.showEmpAddPopup=true
}
}
