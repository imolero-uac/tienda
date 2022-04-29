import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.css'
  ]
})
export class NavComponent implements OnInit {

  activeSidebar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onAlternaSidebar(): void {
    this.activeSidebar = !this.activeSidebar;
  }
}
