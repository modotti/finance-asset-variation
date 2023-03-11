import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetChangeTableComponent } from './asset-change-table.component';

describe('AssetChangeTableComponent', () => {
  let component: AssetChangeTableComponent;
  let fixture: ComponentFixture<AssetChangeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetChangeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetChangeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
