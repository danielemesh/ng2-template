import { Injectable } from '@angular/core';

import { Balloons } from './balloon/mock-balloons';
import { Balloon } from "./balloon/balloon.model";

@Injectable()
export class AppService {

  getBalloons(): Promise<Balloon[]> {
    return Promise.resolve(Balloons);
  }

}
