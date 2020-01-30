import { Component, OnInit } from '@angular/core';
// Once this page is loaded, the oter pages will be lazy-loaded,
// meaning that they, sneakily, will be loaded up without the client
// knowing. This makes the page seem much faster than it really is.

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
