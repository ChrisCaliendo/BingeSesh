import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showSignUp: boolean = false;
  showLogin: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSignUp() {
    this.showSignUp = !this.showSignUp;
    
  }

  toggleLogin() {
    this.showLogin = !this.showLogin;
  }




}
