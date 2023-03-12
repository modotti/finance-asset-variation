import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AssetChangeTableComponent } from './asset-change-table.component';

describe('AssetChangeTableComponent', () => {
  let component: AssetChangeTableComponent;
  let fixture: ComponentFixture<AssetChangeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetChangeTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetChangeTableComponent);
    component = fixture.componentInstance;

    component.data = [
      {
        date: '01/01/2023',
        price: 10,
        changeLastDay: null,
        changeOnPeriod: null,
      },
      {
        date: '02/01/2023',
        price: 15,
        changeLastDay: 50,
        changeOnPeriod: 50,
      },
      {
        date: '03/01/2023',
        price: 7.5,
        changeLastDay: -50,
        changeOnPeriod: -25,
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render elements properly', () => {
    const columns = fixture.debugElement.queryAll(By.css('th'));
    const rows = fixture.debugElement.queryAll(By.css('tbody > tr'));

    const negative = fixture.debugElement.query(
      By.css('.negative')
    ).nativeElement;
    const positive = fixture.debugElement.query(
      By.css('.positive')
    ).nativeElement;

    expect(columns.length).toBe(5);
    expect(rows.length).toBe(3);
    expect(parseFloat(negative.innerHTML)).toBeLessThan(0);
    expect(parseFloat(positive.innerHTML)).toBeGreaterThanOrEqual(0);
  });
});
