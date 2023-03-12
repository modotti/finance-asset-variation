import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AssetDataService } from './asset-data.service';

describe('AssetDataService', () => {
  let service: AssetDataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AssetDataService],
    });
    service = TestBed.inject(AssetDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get assetData', () => {
    const mockData = [{ chart: { result: [{ meta: 1 }, { meta: 2 }] } }];
    service.getDataFromYahoo('TST').subscribe((assetData: any) => {
      expect(assetData.chart.result.length).toBe(2);
      expect(assetData).toEqual(mockData);
    });

    const req = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });
    req.flush(mockData);
  });

  it('should handle HTTP error', () => {
    const mockErrorResponse = { status: 404, statusText: 'Not found' };
    const mockData = {
      chart: {
        error: {
          code: 'Not Found',
          description: 'No data found, symbol may be delisted',
        },
      },
    };

    service.getDataFromYahoo('TST').subscribe({
      error: (error: Error) => {
        expect(error.message).toContain(
          'No data found, symbol may be delisted'
        );
      },
    });

    const req = httpMock.expectOne((req) => {
      return req.method === 'GET';
    });
    req.flush(mockData, mockErrorResponse);
  });
});
