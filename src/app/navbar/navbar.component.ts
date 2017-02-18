import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed: boolean = false;

  menuItems: any[] = [
    { link: "/", text: "Home"},
    { link: "/about", text: "About Us"},
    { link: "/services", text: "Services"},
    { link: "/contact", text: "Contact"},
    { link: "/login", text: "Login", cssClass: "login-btn icon-user"},
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

}
