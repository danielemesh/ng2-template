import { Injectable } from '@angular/core';

import { Balloon } from "./balloon.model";
import { Balloons } from "./mock-balloons";

@Injectable()
export class BalloonsService {

  getBalloons(): Promise<Balloon[]> {
    return Promise.resolve(Balloons);
  }

}
