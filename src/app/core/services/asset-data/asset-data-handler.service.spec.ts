import { TestBed } from '@angular/core/testing';
import { AssetChartResult } from '../../models/asset-chart-result.model';

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

  it('should convert the input data properly', () => {
    const inputData: AssetChartResult = {
      chart: {
        result: [
          {
            meta: {
              currency: 'BRL',
              symbol: 'PETR4.SA',
            },
            timestamp: [1674734400, 1674820800, 1675080000],
            indicators: {
              quote: [
                {
                  open: [10, 15, 7.5],
                },
              ],
            },
          },
        ],
        error: null,
      },
    };

    const result = service.handler(inputData);

    expect(result).toEqual({
      symbol: 'PETR4.SA',
      currency: 'BRL',
      changeData: [
        {
          date: '26/01/2023',
          price: 10,
          changeLastDay: null,
          changeOnPeriod: null,
        },
        {
          date: '27/01/2023',
          price: 15,
          changeLastDay: 50,
          changeOnPeriod: 50,
        },
        {
          date: '30/01/2023',
          price: 7.5,
          changeLastDay: -50,
          changeOnPeriod: -25,
        },
      ],
    });
  });
});
