import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPopupComponent } from './auto-popup.component';

describe('AutoPopupComponent', () => {
  let component: AutoPopupComponent;
  let fixture: ComponentFixture<AutoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
