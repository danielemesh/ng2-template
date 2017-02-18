/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BalloonsService } from './balloons.service';

describe('BalloonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BalloonsService]
    });
  });

  it('should ...', inject([BalloonsService], (service: BalloonsService) => {
    expect(service).toBeTruthy();
  }));
});
