import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AssetChangeChartComponent } from './asset-change-chart.component';

describe('AssetChangeChartComponent', () => {
  let component: AssetChangeChartComponent;
  let fixture: ComponentFixture<AssetChangeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetChangeChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetChangeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render elements properly', () => {
    const chart = fixture.debugElement.queryAll(By.css('highcharts-chart'));
    expect(chart).toBeTruthy();
  });
});
