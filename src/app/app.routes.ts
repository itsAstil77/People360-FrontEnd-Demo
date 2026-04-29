import { Routes } from '@angular/router';
import { Dashboard } from './component/navbar/pages/dashboard/dashboard';
import { Navbar } from './component/navbar/navbar/navbar';
import { Live } from './component/navbar/pages/live/live';
import { Processandautomation } from './component/navbar/pages/processandautomation/processandautomation';
import { Report } from './component/navbar/pages/report/report';
import { Administration } from './component/navbar/pages/administration/administration';
import { Events } from './component/navbar/pages/events/events';
import { Project } from './component/navbar/pages/project/project/project';
import { OtMaster } from './component/navbar/pages/OT-Master/ot-master/ot-master';
import { StaffMaster } from './component/navbar/pages/Staff-Master/staff-master/staff-master';
import { PatientMaster } from './component/navbar/pages/Patient Master/patient-master/patient-master';
import { EquipmentMaster } from './component/navbar/pages/Equipment Master/equipment-master/equipment-master';
import { OtScheduling } from './component/navbar/pages/OT Scheduling/ot-scheduling/ot-scheduling';
import { Device } from './component/navbar/pages/device/device/device';
import { Createreport } from './component/navbar/pages/createreport/createreport';
import { Attendance } from './component/navbar/pages/attendance/attendance';
import { Otreport } from './component/navbar/pages/otreport/otreport';
import { People } from './component/navbar/pages/people/people';
import { Createprocessandautomation } from './component/navbar/pages/createprocessandautomation/createprocessandautomation';
import { Patientreport } from './component/navbar/pages/patientreport/patientreport';
import { Dashboard1 } from './component/navbar/pages/dashboard-1/dashboard-1/dashboard-1';
import { Evacuation1 } from './component/navbar/pages/evacuation1/evacuation1';
import { Visitorpermit } from './component/navbar/pages/visitorpermit/visitorpermit';
import { Dashboardnew } from './component/navbar/pages/dashboardnew/dashboardnew';
import { Customer } from './component/navbar/pages/customer/customer';
import { License } from './component/navbar/pages/license/license';
import { User } from './component/navbar/pages/user/user';
import { Role } from './component/navbar/pages/role/role';
import { Createrole } from './component/navbar/pages/createrole/createrole';
import { Accesscontroll } from './component/navbar/pages/accesscontroll/accesscontroll';
import { Setting } from './component/navbar/pages/setting/setting';

export const routes: Routes = [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
{path:'navbar', component:Navbar},
{path:'dashboard', component:Dashboard},
{path:'live', component:Live},
{path:'processandautomation', component:Processandautomation},
{path:'report', component:Report},
{path:'administration', component:Administration},
{path:'events', component:Events},
{path:'project',component:Project},
{path:'ot-master',component:OtMaster},
{path:'staff-master',component:StaffMaster},
{path:'patient-master',component:PatientMaster},
{path:'equipment-master',component:EquipmentMaster},
{path:'ot-scheduling',component:OtScheduling},
{path:'device',component:Device},
{path:'createreport', component:Createreport},
{path:'attendance',component:Attendance},
{path:'otreport', component:Otreport},
{path:'people',component:People},
{path:'createprocessandautomation', component:Createprocessandautomation},
{path:'patientreport',component:Patientreport},
{path:'dashboard-1',component:Dashboard1},
{path:'evacuation1', component:Evacuation1},
{path:'visitorpermit', component:Visitorpermit},
{path:'dashboardnew', component:Dashboardnew},
{path:'customer' , component:Customer},
{path:'license', component:License},
{path:'user' , component:User},
{path:'role' , component:Role},
{path: 'createrole' , component:Createrole},
{path:'accesscontroll', component:Accesscontroll},
{path: 'setting' , component:Setting}

];
