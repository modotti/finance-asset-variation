import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

import { AssetChartResult } from '../../models/asset-chart-result.model';

@Injectable({
  providedIn: 'root',
})
export class AssetDataService {
  constructor(private httpClient: HttpClient) {}

  getDataFromYahoo(assetSymbol: string): Observable<AssetChartResult> {
    const url = `/finance/chart/${assetSymbol}?interval=1d&range=30d`;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.httpClient
      .get<AssetChartResult>(url, options)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      const result = error.error as AssetChartResult;
      errorMessage =
        result.chart.error?.description ||
        'An error occurred while trying to retrieve data for the selected asset.';
    }
    return throwError(() => new Error(errorMessage));
  }
}
