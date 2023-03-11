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
          color: '#fff',
        },
      },
      series: [
        {
          name: 'Valor',
          showInLegend: false,
          color: this.isPositive() ? '#1eff00' : '#ff0054',
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
