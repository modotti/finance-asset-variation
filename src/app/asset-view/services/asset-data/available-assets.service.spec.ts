import { TestBed } from '@angular/core/testing';

import { AvailableAssetsService } from './available-assets.service';

describe('AvailableAssetsService', () => {
  let service: AvailableAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
