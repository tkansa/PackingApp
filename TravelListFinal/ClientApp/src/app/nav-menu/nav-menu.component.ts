import { Component } from '@angular/core';
import { Router } from '@angular/router'; // ADD THIS

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  // ADD THIS

  constructor(
    
    private route: Router
  ) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  // ADD THIS
  login() {
    this.route.navigateByUrl('/login');
  }
}
