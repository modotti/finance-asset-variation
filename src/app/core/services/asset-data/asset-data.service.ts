import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { AssetChartResult } from '../../models/asset-chart-result.model';

@Injectable({
  providedIn: 'root',
})
export class AssetDataService {
  constructor(private httpClient: HttpClient) {}

  getDataFromYahoo(assetSymbol: string): Observable<AssetChartResult> {
    const url = `/finance/chart/${assetSymbol}?interval=1d&period1=1672542000&period2=1677553200`;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient
      .get<AssetChartResult>(url, options)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const result = error.error as AssetChartResult;
    const errorMessage =
      result.chart.error?.description ||
      'An error occurred while trying to retrieve data for the selected asset.';
    return throwError(() => new Error(errorMessage));
  }
}
