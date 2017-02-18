import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'WELCOME TO PINK';
  subtitle: string = 'A multi purpose theme from cssauthor.com';

  constructor() { }

  ngOnInit() {
  }

}
