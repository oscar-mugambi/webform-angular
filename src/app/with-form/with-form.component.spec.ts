import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithFormComponent } from './with-form.component';

describe('WithFormComponent', () => {
  let component: WithFormComponent;
  let fixture: ComponentFixture<WithFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
