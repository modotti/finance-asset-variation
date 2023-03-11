import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AssetDataService } from '../../services/asset-data/asset-data.service';

import { AssetChangeComponent } from './asset-change.component';

describe('AssetChangeComponent', () => {
  let component: AssetChangeComponent;
  let fixture: ComponentFixture<AssetChangeComponent>;
  let assetDataService: AssetDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [AssetChangeComponent],
      providers: [AssetDataService],
    }).compileComponents();

    assetDataService = TestBed.inject(AssetDataService);
    jest.spyOn(assetDataService, 'getDataFromYahoo').mockReturnValue(of());

    fixture = TestBed.createComponent(AssetChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
