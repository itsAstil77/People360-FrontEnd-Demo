import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as L from 'leaflet';

interface NavNode {
  name: string;
  expanded?: boolean;
  children?: NavNode[];
  mapImage?: string; 
}

interface LocationInfo {
  coords: L.LatLngExpression;
  zoom: number;
}

interface LocationsMap {
  [key: string]: LocationInfo | undefined;
}

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './live.html',
  styleUrl: './live.css',
})
export class Live implements AfterViewInit {
  selectedNode: string = 'Track People';
  currentMapImage: string = 'assets/map.png';
  showLeaflet: boolean = true; // Default to true for 'Track People'
  map!: L.Map;

  locationsData: LocationsMap = {
    'UAE': { coords: [23.4241, 53.8478], zoom: 7 },
    'Oman': { coords: [21.4735, 55.9754], zoom: 7 },
    'Street One': { coords: [23.6105, 58.5922], zoom: 15 }
  };

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
                      mapImage: 'assets/mapp.png',
                      children: [
                        { name: 'Third Right', mapImage: 'assets/mapp.png', 
                          children: [{ name: 'Azy floor', mapImage: 'assets/mappp.png' }] 
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

  ngAfterViewInit() {
    this.initMap();
  }
private initMap(): void {
  // Use a timeout to ensure the DOM has fully rendered before Leaflet starts
  setTimeout(() => {
    this.map = L.map('map').setView([24.0, 45.0], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // CRITICAL: This fixes the fragmented tile issue
    this.map.invalidateSize();
  }, 100); 
}

  handleNodeClick(node: NavNode) {
    this.selectedNode = node.name;

    // 1. Determine if we should show Leaflet or Static Image
    const mapCoords = this.locationsData[node.name];
    
    if (mapCoords || node.name === 'Track People') {
      this.showLeaflet = true;
      if (mapCoords && this.map) {
        this.map.flyTo(mapCoords.coords, mapCoords.zoom, { animate: true, duration: 2 });
      }
    } else if (node.mapImage) {
      this.showLeaflet = false;
      this.currentMapImage = node.mapImage;
    }

    if (node.children) {
      node.expanded = !node.expanded;
    }
  }









    selectedParameter: string = ' '; // <-- add this

    parameterNodeMap: { [key: string]: string } = {
    'Total Visitor': 'Third Right',
    'New Visitor': 'Third Right',
    'Repeated Visitor': 'Third Right',
    'Employee': 'Third Right',
    'Heatmap': 'Azy floor',
    'Queue': 'Third Right',
    'Dwell time': 'Third Right',
  };

   onParameterChange() {
    const targetNodeName = this.parameterNodeMap[this.selectedParameter];
    if (targetNodeName) {
      this.findAndSelectNode(this.locations, targetNodeName);
    }
  }
    findAndSelectNode(nodes: NavNode[], name: string): boolean {
    for (const node of nodes) {
      if (node.name === name) {
        this.handleNodeClick(node);
        return true;
      }
      if (node.children) {
        // Expand parent so child is visible
        const found = this.findAndSelectNode(node.children, name);
        if (found) {
          node.expanded = true;
          return true;
        }
      }
    }
    return false;
  }







}