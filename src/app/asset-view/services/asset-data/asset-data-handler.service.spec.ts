import { TestBed } from '@angular/core/testing';

import { AssetDataHandlerService } from './asset-data-handler.service';

describe('AssetDataHandlerService', () => {
  let service: AssetDataHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetDataHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
