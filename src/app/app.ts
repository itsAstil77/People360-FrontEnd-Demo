import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('people360');


    isExpanded = false;

  // 🔥 receive event from navbar
  onSidebarToggle(state: boolean) {
    this.isExpanded = state;
  }
}
