import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    component.symbol = 'TST1';
    component.assetList = [
      {
        symbol: 'TST1',
        description: 'Teste 1',
      },
      {
        symbol: 'TST2',
        description: 'Teste 2',
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render elements properly', () => {
    const symbol = fixture.debugElement.query(By.css('h1')).nativeElement;
    const select = fixture.debugElement.query(By.css('select')).nativeElement;

    expect(symbol).toBeTruthy();
    expect(symbol.innerHTML).toBe('TST1');
    expect(select).toBeTruthy();
    expect(select.childElementCount).toBe(2);
  });

  it('should emit event when change asset in selector', () => {
    const changeEventSpy = jest
      .spyOn(component.changeEvent, 'emit')
      .mockImplementation();

    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    select.dispatchEvent(new Event('change'));

    expect(changeEventSpy).toHaveBeenCalled();
  });

  it('should show symbol of asset in h1 when change asset in selector', () => {
    const symbol = fixture.debugElement.query(By.css('h1')).nativeElement;
    const select = fixture.debugElement.query(By.css('select')).nativeElement;
    select.value = 'TST2';
    select.dispatchEvent(new Event('change'));

    fixture.detectChanges();

    expect(symbol.innerHTML).toBe('TST2');
  });
});
