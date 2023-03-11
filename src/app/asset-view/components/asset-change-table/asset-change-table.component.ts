import { Component, Input, OnChanges } from '@angular/core';
import { AssetChangeData } from '../../models/asset-change-period.model';

@Component({
  selector: 'app-asset-change-table',
  templateUrl: './asset-change-table.component.html',
  styleUrls: ['./asset-change-table.component.scss'],
})
export class AssetChangeTableComponent implements OnChanges {
  @Input() data: AssetChangeData[] = [];
  ngOnChanges(): void {}
}
