import { TestBed } from '@angular/core/testing';

import { ReseravationService } from './reseravation.service';

describe('ReseravationService', () => {
  let service: ReseravationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReseravationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
