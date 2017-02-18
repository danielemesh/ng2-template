import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsListComponent } from "./cards-list/cards-list.component";
import { BalloonsComponent } from "./balloons/balloons.component";

const routes: Routes = [
  { path: 'about', component: CardsListComponent },
  { path: 'services', component: BalloonsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
