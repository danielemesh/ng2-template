import { Component, OnInit, Input } from '@angular/core';

import { Balloon } from './balloon.model';

@Component({
  moduleId: module.id,
  selector: 'balloon',
  templateUrl: './balloon.component.html',
  styleUrls: ['./balloon.component.scss']
})
export class BalloonComponent implements OnInit {

  @Input() balloon: Balloon;

  constructor() { }

  ngOnInit() {
  }

}
