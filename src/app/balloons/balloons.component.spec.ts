/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BalloonsComponent } from './balloons.component';

describe('BalloonsComponent', () => {
  let component: BalloonsComponent;
  let fixture: ComponentFixture<BalloonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalloonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
