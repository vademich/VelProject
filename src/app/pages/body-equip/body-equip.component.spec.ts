import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyEquipComponent } from './body-equip.component';

describe('BodyEquipComponent', () => {
  let component: BodyEquipComponent;
  let fixture: ComponentFixture<BodyEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyEquipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
