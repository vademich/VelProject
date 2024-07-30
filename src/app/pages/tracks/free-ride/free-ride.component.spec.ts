import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeRideComponent } from './free-ride.component';

describe('FreeRideComponent', () => {
  let component: FreeRideComponent;
  let fixture: ComponentFixture<FreeRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeRideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
