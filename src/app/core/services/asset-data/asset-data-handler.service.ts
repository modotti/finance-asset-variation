import { Injectable } from '@angular/core';

import {
  AssetChangeData,
  AssetChangePeriodData,
} from '../../models/asset-change-period.model';
import { AssetChartResult } from '../../models/asset-chart-result.model';

@Injectable({
  providedIn: 'root',
})
export class AssetDataHandlerService {
  constructor() {}

  handler(assetData: AssetChartResult): AssetChangePeriodData {
    const originalData = assetData.chart.result[0];
    const quote = originalData.indicators.quote[0];
    const initialPrice = quote.open[0];

    const resultData = originalData.timestamp.map(
      (timestamp, index): AssetChangeData => {
        const previousPrice = index === 0 ? null : quote.open[index - 1];
        const currentPrice = quote.open[index];
        const changeLastDay = previousPrice
          ? ((currentPrice - previousPrice) / previousPrice) * 100
          : null;
        const changeOnPeriod = previousPrice
          ? ((currentPrice - initialPrice) / initialPrice) * 100
          : null;
        const date = new Date(timestamp * 1000).toLocaleDateString('pt-br');

        return {
          date,
          price: currentPrice,
          changeLastDay,
          changeOnPeriod,
        };
      }
    );

    return {
      symbol: originalData.meta.symbol,
      currency: originalData.meta.currency,
      changeData: resultData,
    };
  }
}
