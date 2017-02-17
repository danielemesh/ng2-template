import { Component, OnInit } from '@angular/core';

import { Balloon } from "./shared/balloon.model";
import { BalloonsService } from "./shared/balloons.service";

@Component({
  moduleId: module.id,
  selector: 'balloons',
  templateUrl: './balloons.component.html',
  styleUrls: ['./balloons.component.scss'],
  providers: [BalloonsService]
})
export class BalloonsComponent implements OnInit {

  balloons: Balloon[];

  constructor(private balloonsService: BalloonsService) { }

  ngOnInit() {
    this.getBalloons();
  }

  getBalloons(): void {
    this.balloonsService
      .getBalloons()
      .then(balloons => this.balloons = balloons);
  }
}
