import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('assets') assets!: ElementRef<HTMLSelectElement>;

  public assetChangeList: AssetChangeData[] = [];
  public availableAssetList: AvailableAsset[] = [];
  public symbol: string = '';

  public errorMessage: string | null = null;
  public loading = false;

  constructor(
    private assetDataService: AssetDataService,
    private availableAssetsService: AvailableAssetsService,
    private assetDataHandlerService: AssetDataHandlerService
  ) {}

  ngOnInit(): void {
    this.availableAssetList = this.availableAssetsService.getAssets();
    this.symbol = this.availableAssetList[0].symbol;
    this.refreshAssetData();
  }

  onChangeAsset(): void {
    this.symbol = this.assets.nativeElement.value;
    this.refreshAssetData();
  }

  private refreshAssetData(): void {
    this.loading = true;
    this.assetDataService.getDataFromYahoo(this.symbol).subscribe({
      next: (result: AssetChartResult) => {
        this.loading = false;
        const handledData = this.assetDataHandlerService.handler(result);
        this.assetChangeList = handledData.changeData;
        this.errorMessage = null;
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error;
      },
    });
  }
}
