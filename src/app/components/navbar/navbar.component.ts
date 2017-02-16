import { Component, OnInit } from '@angular/core';
import { NavLink } from "./nav-link";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navLinks: NavLink[] = [
    { href: "", text: "Home"},
    { href: "", text: "About Us"},
    { href: "", text: "Services"},
    { href: "", text: "Contact"},
    { href: "", text: "Login", cssClass: "login-btn"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
