import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVelArrowComponent } from './button-vel-arrow.component';

describe('ButtonVelArrowComponent', () => {
  let component: ButtonVelArrowComponent;
  let fixture: ComponentFixture<ButtonVelArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonVelArrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonVelArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
