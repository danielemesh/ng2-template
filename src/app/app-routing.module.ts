import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardsListComponent } from "./cards-list/cards-list.component";
import { BalloonsComponent } from "./balloons/balloons.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'about', component: CardsListComponent },
  { path: 'services', component: BalloonsComponent },
  { path: 'contact', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
