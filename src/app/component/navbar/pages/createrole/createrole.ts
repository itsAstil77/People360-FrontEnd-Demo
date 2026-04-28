import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-createrole',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './createrole.html',
  styleUrl: './createrole.css',
})
export class Createrole  implements OnInit {


 role = { name: '', description: '' };
  selectedNode: any = null;
  locations: any[] = [];

  accessModules = [
    { name: 'Dashboard', view: false, edit: false },
    { name: 'Events', view: false, edit: false },
    { name: 'Reports', view: false, edit: false },
    { name: 'Administration', view: false, edit: false },
    { name: 'Visitor Management', view: false, edit: false },
    { name: 'Asset Tracking & Management', view: false, edit: false }
  ];

ngOnInit() {
  this.locations = [
    {
      name: 'Track People',
      checked: false,
      expanded: false,
      children: [
        {
          name: 'UAE',
          checked: false,
          expanded: false,
          children: [
            {
              name: 'Oman',
              checked: false,
              expanded: false,
              children: [
                {
                  name: 'Street One',
                  checked: false,
                  expanded: false,
                  children: [
                    { name: 'Second Colony', checked: false, expanded: false, children: [
                      { name: 'Third Right', checked: false, expanded: false, children: [
                        { name: 'Azy floor', checked: false }
                      ]}
                    ]}
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
}

  toggleNodeSelection(node: any) {
    if (node.children) {
      this.updateChildren(node.children, node.checked);
    }
  }

  updateChildren(children: any[], status: boolean) {
    children.forEach(child => {
      child.checked = status;
      if (child.children) this.updateChildren(child.children, status);
    });
  }

  handleNodeClick(node: any) {
    this.selectedNode = node;
    node.expanded = !node.expanded;
  }

  saveRole() {
    console.log('Saving Role:', this.role);
    console.log('Permissions:', this.accessModules);
    console.log('Hierarchy:', this.locations);
  }

  cancel() {
    window.history.back();
  }

}
