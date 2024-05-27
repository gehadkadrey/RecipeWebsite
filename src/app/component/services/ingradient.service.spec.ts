import { TestBed } from '@angular/core/testing';

import { IngradientService } from './ingradient.service';

describe('IngradientService', () => {
  let service: IngradientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngradientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
