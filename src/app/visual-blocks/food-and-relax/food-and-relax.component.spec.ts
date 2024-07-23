import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAndRelaxComponent } from './food-and-relax.component';

describe('FoodAndRelaxComponent', () => {
  let component: FoodAndRelaxComponent;
  let fixture: ComponentFixture<FoodAndRelaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodAndRelaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodAndRelaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
