import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render elements properly', () => {
    const credits = fixture.debugElement.query(
      By.css('p[id="credits"]')
    ).nativeElement;

    const link = fixture.debugElement.query(
      By.css('a[href="https://finance.yahoo.com/"]')
    );

    expect(link).toBeTruthy();
    expect(credits).toBeTruthy();
    expect(credits.innerHTML).toContain('Luiz Fernando Modotti');
  });
});
