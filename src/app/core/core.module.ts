import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetChangeComponent } from './pages/asset-change/asset-change.component';
import { AssetDataService } from './services/asset-data/asset-data.service';
import { AssetDataHandlerService } from './services/asset-data/asset-data-handler.service';
import { AssetChangeTableComponent } from './components/asset-change-table/asset-change-table.component';
import { AssetChangeChartComponent } from './components/asset-change-chart/asset-change-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AssetChangeComponent,
    AssetChangeTableComponent,
    AssetChangeChartComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HighchartsChartModule],
  providers: [AssetDataService, AssetDataHandlerService],
})
export class CoreModule {}
