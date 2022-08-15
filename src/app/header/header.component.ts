import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated:string = 'false';

  constructor() { }

  ngOnInit(): void {
    this.handleAuthentication();
    // console.log('i was called', this.isAuthenticated)
  }

  onClick() {}
  handleAuthentication(){
    this.isAuthenticated = localStorage.getItem('isAuthenticated') || 'false';
  }
}
