import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menuItems: any[] = [
    { href: "#", text: "Home"},
    { href: "#", text: "About Us"},
    { href: "#", text: "Services"},
    { href: "#", text: "Contact"},
    { href: "#", text: "Login", cssClass: "login-btn icon-user"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
