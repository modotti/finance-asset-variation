export interface AssetChartResult {
  chart: {
    result: Result[];
    error: null | ChartError;
  };
}

interface Result {
  meta: Meta;
  timestamp: number[];
  indicators: {
    quote: Quote[];
    adjclose: AdjClose[];
  };
}

interface Meta {
  currency: string;
  symbol: string;
  exchangeName: string;
  instrumentType: string;
  firstTradeDate: number;
  regularMarketTime: number;
  gmtoffset: number;
  timezone: string;
  exchangeTimezoneName: string;
  regularMarketPrice: number;
  chartPreviousClose: number;
  previousClose: number;
  scale: number;
  priceHint: number;
  currentTradingPeriod: {
    pre: TradingPeriod;
    regular: TradingPeriod;
    post: TradingPeriod;
  };
  tradingPeriods: TradingPeriod[][];
  dataGranularity: string;
  range: string;
  validRanges: string[];
}

interface TradingPeriod {
  timezone: string;
  end: number;
  start: number;
  gmtoffset: number;
}

interface Quote {
  close: number[];
  volume: number[];
  open: number[];
  high: number[];
  low: number[];
}

interface AdjClose {
  adjclose: number[];
}

interface ChartError {
  code: string;
  description: string;
}
