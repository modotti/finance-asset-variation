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
  };
}

interface Meta {
  currency: string;
  symbol: string;
}

interface Quote {
  open: number[];
}

interface ChartError {
  code: string;
  description: string;
}
