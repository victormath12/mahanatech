import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sidebar: Boolean = false;

  constructor() { }

  ngOnInit() { }

  toggleSidebar(menuClicked) {
    this.sidebar = !this.sidebar;
    console.log(menuClicked);
  }

}
