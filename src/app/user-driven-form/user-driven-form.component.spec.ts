import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDrivenComponent } from './user-driven-form.component';

describe('UserDrivenFormComponent', () => {
  let component: UserDrivenComponent;
  let fixture: ComponentFixture<UserDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDrivenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
