import { TestBed } from '@angular/core/testing';

import { SeafoodsService } from './seafoods.service';

describe('SeafoodsService', () => {
  let service: SeafoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeafoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
