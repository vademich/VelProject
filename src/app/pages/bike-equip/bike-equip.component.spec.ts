import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeEquipComponent } from './bike-equip.component';

describe('BikeEquipComponent', () => {
  let component: BikeEquipComponent;
  let fixture: ComponentFixture<BikeEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeEquipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BikeEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
