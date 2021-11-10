import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonYouComponent } from './button-you.component';

describe('ButtonYouComponent', () => {
  let component: ButtonYouComponent;
  let fixture: ComponentFixture<ButtonYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
