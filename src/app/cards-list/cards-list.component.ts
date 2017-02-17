import { Component, OnInit } from '@angular/core';

import { CardsService } from "./shared/cards.service";
import { Card } from "./shared/card.model";

@Component({
  moduleId: module.id,
  selector: 'cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
  providers: [CardsService]
})
export class CardsListComponent implements OnInit {

  cards: Card[];

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.cardsService
      .getCards()
      .then(cards => this.cards = cards);
  }

}
