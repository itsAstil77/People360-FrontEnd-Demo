import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
import { filter } from 'rxjs';


interface AdminNode {
  name: string;
  path?: string;
  expanded?: boolean;
  hasArrow?: boolean;
  children?: AdminNode[];
}
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})


export class Navbar implements OnInit {
  @Output() sidebarToggle = new EventEmitter<boolean>();
  constructor(private router: Router) { }

  ngOnInit() {
    this.activeRoute = this.router.url;

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.activeRoute = event.urlAfterRedirects;
      });
  }
  isExpanded = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
    this.sidebarToggle.emit(this.isExpanded);
  }

  activeRoute: string = '/administration';
  isConfigExpanded: boolean = false;
  administrationSubItems: AdminNode[] = [
    {
      name: 'Configuration',
      children: [
        { name: 'Projects', path: '/project' },
        { name: 'Devices', path: '/device' },
        { name: 'People', path: '/people' },
        { name: 'Attendance', path: '/attendance' },
        { name: 'Access Control', path:'/accesscontroll' },
        {
          name: 'OT Management',
          hasArrow: true,
          expanded: false,
          children: [
            { name: 'OT Master', path: '/ot-master' },
            { name: 'Staff Master', path: '/staff-master' },
            { name: 'Patient Master', path: '/patient-master' },
            { name: 'Equipment Master', path: '/equipment-master' },
            { name: 'OT Scheduling', path: '/ot-scheduling' },
          ]
        },
        {
          name: 'Visitor Management',
          hasArrow: true,
          expanded: false,
          children: [
            { name: 'Manage', path:'/visitorpermit' },
            {
              name: 'Setting', path:'/setting' 
              // hasArrow: true,
              // expanded: false,
              // children: [
              //   { name: 'Visitor Panel' },
              //   { name: 'Approval' },
              //   { name: 'Entry/Exit' },
              //   { name: 'Identification' },
              //   { name: 'Permit' },
              //   { name: 'Registration Details' },
              //   { name: 'Reconsile Pass' }
              // ]
            },
            { name: 'Safety Permit' }
          ]
        },
        { name: 'Patrol' },
        { name: 'Meal Management' },
        { name: 'Evacuation' }
      ]
    },
     { name: 'License', path: '/license' },
    {
      name: 'User Management',
      hasArrow: true,
      expanded: false,
      children: [
        { name: 'User', path: '/user' },
        { name: 'Role', path: '/role' }
      ]
    }
    










  ];

















  // administrationSubItems: AdminNode[] = [
  //   {
  //     name: 'Configuration',
  //     children: [
  //       { name: 'Projects', path: '/project' },
  //       { name: 'Devices', path: '/device' },
  //       { name: 'People', path: '/people' },
  //       { name: 'Attendance', path: '/attendance' },
  //       { name: 'Access Control' },
  //       {
  //         name: 'OT Management',
  //         hasArrow: true,
  //         expanded: false,
  //         children: [
  //           { name: 'OT Master', path: '/ot-master' },
  //           { name: 'Staff Master', path: '/staff-master' },
  //           { name: 'Patient Master', path: '/patient-master' },
  //           { name: 'Equipment Master', path: '/equipment-master' },
  //           { name: 'OT Scheduling', path: '/ot-scheduling' },
  //         ]
  //       },
  //       {
  //         name: 'Visitor Management',
  //         hasArrow: true,
  //         expanded: false,
  //         children: [
  //           { name: 'Manage' },
  //           {
  //             name: 'Masters',
  //             hasArrow: true,
  //             expanded: false,
  //             children: [
  //               { name: 'Visitor Panel' },
  //               { name: 'Approval' },
  //               { name: 'Entry/Exit' },
  //               { name: 'Identification' },
  //               { name: 'Permit' },
  //               { name: 'Registration Details' },
  //               { name: 'Reconsile Pass' }
  //             ]
  //           },
  //           { name: 'Safety Permit' }
  //         ]
  //       },
  //       { name: 'Patrol' },
  //       { name: 'Meal Management' },
  //       { name: 'Evacuation' }
  //     ]
  //   },
  //   { name: 'License', path: '/license' },
  //   {
  //     name: 'User Management',
  //     hasArrow: true,
  //     expanded: false,
  //     children: [
  //       { name: 'User', path: '/user-management' },
  //       { name: 'Role', path: '/role' }
  //     ]
  //   }
  // ];


















  toggleConfig() {
    this.isConfigExpanded = !this.isConfigExpanded;
  }

  isReportActive(): boolean {
    return this.activeRoute.includes('/report') ||
      this.activeRoute.includes('/createreport') ||
      this.activeRoute.includes('/otreport') ||
      this.activeRoute.includes('/patientreport')||
      this.activeRoute.includes('customer');
  }


  isProcessActive(): boolean {
    return this.activeRoute.includes('/processandautomation') ||
      this.activeRoute.includes('/createprocessandautomation');

  }





  isDashboardActive(): boolean {
  return this.activeRoute.includes('/dashboard') ||
         this.activeRoute.includes('/evacuation1') ||
         this.activeRoute.includes('/evacuation2');
}





// isAdministrationActive(): boolean {
//   return this.activeRoute.includes('/administration') ||
//          this.activeRoute.includes('/visitorpermit') ||
//          this.activeRoute.includes('/user');
// }







isAdminMenuOpen = false;

toggleAdminMenu(event: Event) {
  event.preventDefault();        // ✅ stops any navigation
  event.stopPropagation();       // ✅ stops event bubbling
  this.isAdminMenuOpen = !this.isAdminMenuOpen;
}

isAdministrationActive(): boolean {
  return this.isAdminMenuOpen || this.activeRoute.includes('/administration')||
  this.activeRoute.includes('/visitorpermit') ||
  this.activeRoute.includes('/project') ||
  this.activeRoute.includes('/device') ||
  this.activeRoute.includes('/people') ||
  this.activeRoute.includes('/attendance') ||
  this.activeRoute.includes('/ot-master') ||
  this.activeRoute.includes('/staff-master') ||
  this.activeRoute.includes('/patient-master') ||
  this.activeRoute.includes('/equipment-master') ||
  this.activeRoute.includes('/ot-scheduling') ||
  this.activeRoute.includes('/user')||
  this.activeRoute.includes('/role') ||
  this.activeRoute.includes('/license')||
  this.activeRoute.includes('/createrole')||
  this.activeRoute.includes('/accesscontroll')||
  this.activeRoute.includes('/setting');
}

onAdminClick(event: Event) {
  this.toggleAdminMenu(event);     // open submenu
  this.router.navigate(['/administration']);  // navigate
}




@HostListener('document:click', ['$event'])
onDocumentClick(event: Event) {
  const target = event.target as HTMLElement;
  // closes menu if click is outside sidebar

   this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.isAdminMenuOpen = false;
    }
  });
  if (!target.closest('.left-sidebar')) {
    this.isAdminMenuOpen = false;
  }
}
 



  onAdminItemClick(item: AdminNode) {
  if (item.name === 'Configuration') {
    this.toggleConfig();
    return;
  }
  if (item.children) {
    item.expanded = !item.expanded;
    return;
  }
  if (item.path) {
    this.router.navigate([item.path]);
  }
}






}
