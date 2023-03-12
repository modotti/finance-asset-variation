import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
} from '@angular/core';
import { AvailableAsset } from '../../models/available-asset.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnChanges {
  @ViewChild('assets') assets!: ElementRef<HTMLSelectElement>;

  @Input() assetList: AvailableAsset[] = [];
  @Output() changeEvent = new EventEmitter();
  public symbol: string = '';

  constructor() {}

  ngOnChanges(): void {
    this.symbol = this.assetList[0].symbol;
  }

  onChangeAsset(): void {
    this.symbol = this.assets.nativeElement.value;
    this.changeEvent.emit(this.symbol);
  }
}
