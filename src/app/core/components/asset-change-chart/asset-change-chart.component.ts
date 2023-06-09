import * as Highcharts from 'highcharts';
import { Component, Input, OnChanges } from '@angular/core';

import { AssetChangeData } from '../../models/asset-change-period.model';

@Component({
  selector: 'app-asset-change-chart',
  templateUrl: './asset-change-chart.component.html',
  styleUrls: ['./asset-change-chart.component.scss'],
})
export class AssetChangeChartComponent implements OnChanges {
  @Input() data: AssetChangeData[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnChanges(): void {
    const dates = this.data.map((item) => item.date);
    const prices = this.data.map((item) => Math.round(item.price * 100) / 100);

    this.chartOptions = {
      accessibility: {
        enabled: false,
      },
      title: {
        text: '',
      },
      xAxis: {
        categories: dates,
      },
      yAxis: {
        title: {
          text: 'Valor',
        },
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        style: {
          color: '#668',
        },
      },
      series: [
        {
          name: 'Valor',
          showInLegend: false,
          color: this.isPositive() ? '#10a171' : '#d8224f',
          type: 'line',
          data: prices,
          marker: {
            enabled: false,
          },
        },
      ],
    };
  }

  private isPositive(): boolean {
    if (!this.data || this.data.length === 0) return false;
    return (this.data[this.data.length - 1].changeOnPeriod || 0) > 0;
  }
}
