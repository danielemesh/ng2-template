import { Component, OnInit } from '@angular/core';
import { AppService } from "./app.service";
import { Balloon } from "./balloon/balloon.model";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  balloons: Balloon[];

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.getBalloons();
    console.log("", this.balloons);
  }

  getBalloons(): void {
    this.appService
      .getBalloons()
      .then(balloons => this.balloons = balloons);
  }
}
