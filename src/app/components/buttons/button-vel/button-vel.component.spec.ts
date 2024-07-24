import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonVelComponent } from './button-vel.component';

describe('ButtonVelComponent', () => {
  let component: ButtonVelComponent;
  let fixture: ComponentFixture<ButtonVelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonVelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonVelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
