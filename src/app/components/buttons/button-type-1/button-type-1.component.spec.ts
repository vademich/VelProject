import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonType1Component } from './button-type-1.component';

describe('ButtonType1Component', () => {
  let component: ButtonType1Component;
  let fixture: ComponentFixture<ButtonType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonType1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
