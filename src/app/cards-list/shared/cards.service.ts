import { Injectable } from '@angular/core';

import { Cards } from './mock-cards';
import { Card } from "./card.model";

@Injectable()
export class CardsService {

  constructor() { }

  getCards(): Promise<Card[]> {
    return Promise.resolve(Cards);
  }

}
