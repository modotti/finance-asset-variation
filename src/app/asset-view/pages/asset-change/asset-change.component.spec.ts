import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { CoreModule } from '../../core.module';
import { AssetChartResult } from '../../models/asset-chart-result.model';
import { AssetDataHandlerService } from '../../services/asset-data/asset-data-handler.service';
import { AssetDataService } from '../../services/asset-data/asset-data.service';
import { AvailableAssetsService } from '../../services/asset-data/available-assets.service';
import { AssetChangeComponent } from './asset-change.component';

describe('AssetChangeComponent', () => {
  let component: AssetChangeComponent;
  let fixture: ComponentFixture<AssetChangeComponent>;
  let assetDataService: AssetDataService;
  let availableAssetsService: AvailableAssetsService;

  let assetDataServiceSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      declarations: [AssetChangeComponent],
      providers: [
        AssetDataService,
        AvailableAssetsService,
        AssetDataHandlerService,
      ],
    }).compileComponents();

    assetDataService = TestBed.inject(AssetDataService);
    availableAssetsService = TestBed.inject(AvailableAssetsService);

    assetDataServiceSpy = jest
      .spyOn(assetDataService, 'getDataFromYahoo')
      .mockReturnValue(
        of({
          chart: {
            result: [
              {
                meta: {
                  currency: 'BRL',
                  symbol: 'PETR4.SA',
                },
                timestamp: [1674734400, 1674820800, 1675080000],
                indicators: {
                  quote: [
                    {
                      open: [10, 15, 7.5],
                    },
                  ],
                },
              },
            ],
            error: null,
          },
        } as AssetChartResult)
      );

    jest.spyOn(availableAssetsService, 'getAssets').mockImplementation(() => {
      return [
        {
          symbol: 'TST1.SA',
          description: 'Teste 1',
        },
        {
          symbol: 'TST2.SA',
          description: 'Teste 2',
        },
      ];
    });

    fixture = TestBed.createComponent(AssetChangeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service with first asset in the list and when changing, should call the method with the selected asset', () => {
    expect(assetDataServiceSpy).toHaveBeenCalledWith('TST1.SA');
    component.onChangeAsset('TST2.SA');
    expect(assetDataServiceSpy).toHaveBeenCalledWith('TST2.SA');
  });

  it('ASD', () => {
    assetDataServiceSpy = jest
      .spyOn(assetDataService, 'getDataFromYahoo')
      .mockReturnValue(throwError(() => new Error('Teste')));

    component.onChangeAsset('TST2.SA');
    expect(component.errorMessage).toBe('Teste');
  });

  it('should render elements properly on normal scenario', () => {
    component.loading = false;
    component.errorMessage = null;
    fixture.detectChanges();

    const header = fixture.debugElement.query(By.css('app-header'));
    const footer = fixture.debugElement.query(By.css('app-footer'));
    const chart = fixture.debugElement.query(By.css('app-asset-change-chart'));
    const table = fixture.debugElement.query(By.css('app-asset-change-table'));
    const loading = fixture.debugElement.query(
      By.css('.app-asset-change__loading')
    );
    const error = fixture.debugElement.query(
      By.css('.app-asset-change__error')
    );

    expect(header).toBeTruthy();
    expect(footer).toBeTruthy();
    expect(chart).toBeTruthy();
    expect(table).toBeTruthy();
    expect(loading).toBeFalsy();
    expect(error).toBeFalsy();
  });

  it('should render elements properly on loading scenario', () => {
    component.loading = true;
    component.errorMessage = null;
    fixture.detectChanges();

    const header = fixture.debugElement.query(By.css('app-header'));
    const footer = fixture.debugElement.query(By.css('app-footer'));
    const chart = fixture.debugElement.query(By.css('app-asset-change-chart'));
    const table = fixture.debugElement.query(By.css('app-asset-change-table'));
    const loading = fixture.debugElement.query(
      By.css('.app-asset-change__loading')
    );
    const error = fixture.debugElement.query(
      By.css('.app-asset-change__error')
    );

    expect(header).toBeTruthy();
    expect(footer).toBeFalsy();
    expect(chart).toBeFalsy();
    expect(table).toBeFalsy();
    expect(loading).toBeTruthy();
    expect(error).toBeFalsy();
  });

  it('should render elements properly on error scenario', () => {
    component.loading = false;
    component.errorMessage = 'Error Message';
    fixture.detectChanges();

    const header = fixture.debugElement.query(By.css('app-header'));
    const footer = fixture.debugElement.query(By.css('app-footer'));
    const chart = fixture.debugElement.query(By.css('app-asset-change-chart'));
    const table = fixture.debugElement.query(By.css('app-asset-change-table'));
    const loading = fixture.debugElement.query(
      By.css('.app-asset-change__loading')
    );
    const error = fixture.debugElement.query(
      By.css('.app-asset-change__error')
    );

    expect(header).toBeTruthy();
    expect(footer).toBeFalsy();
    expect(chart).toBeFalsy();
    expect(table).toBeFalsy();
    expect(loading).toBeFalsy();
    expect(error).toBeTruthy();
    expect(error.nativeElement.innerHTML).toContain('Error Message');
  });
});
