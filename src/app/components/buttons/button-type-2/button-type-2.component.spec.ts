import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonType2Component } from './button-type-2.component';

describe('ButtonType2Component', () => {
  let component: ButtonType2Component;
  let fixture: ComponentFixture<ButtonType2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonType2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
