import { Component, OnInit } from '@angular/core';

import { AssetChangeData } from '../../models/asset-change-period.model';
import { AssetChartResult } from '../../models/asset-chart-result.model';
import { AvailableAsset } from '../../models/available-asset.model';
import { AssetDataHandlerService } from '../../services/asset-data/asset-data-handler.service';
import { AssetDataService } from '../../services/asset-data/asset-data.service';
import { AvailableAssetsService } from '../../services/asset-data/available-assets.service';

@Component({
  selector: 'app-asset-change',
  templateUrl: './asset-change.component.html',
  styleUrls: ['./asset-change.component.scss'],
})
export class AssetChangeComponent implements OnInit {
  public assetChangeList: AssetChangeData[] = [];
  public availableAssetList: AvailableAsset[] = [];

  public errorMessage: string | null = null;
  public loading = false;

  constructor(
    private assetDataService: AssetDataService,
    private availableAssetsService: AvailableAssetsService,
    private assetDataHandlerService: AssetDataHandlerService
  ) {}

  ngOnInit(): void {
    this.availableAssetList = this.availableAssetsService.getAssets();
    const symbol = this.availableAssetList[0].symbol;
    this.refreshAssetData(symbol);
  }

  onChangeAsset(symbol: string): void {
    this.refreshAssetData(symbol);
  }

  private refreshAssetData(symbol: string): void {
    this.loading = true;
    this.assetDataService.getDataFromYahoo(symbol).subscribe({
      next: (result: AssetChartResult) => {
        const handledData = this.assetDataHandlerService.handler(result);
        this.assetChangeList = handledData.changeData;
        this.loading = false;
        this.errorMessage = null;
      },
      error: (error: Error) => {
        this.loading = false;
        this.errorMessage = error.message;
      },
    });
  }
}
