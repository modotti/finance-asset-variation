export interface AssetChangePeriodData {
  symbol: string;
  currency: string;
  changeData: AssetChangeData[];
}

export interface AssetChangeData {
  date: string;
  price: number;
  changeLastDay: number | null;
  changeOnPeriod: number | null;
}
