import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDetailsComponent } from './arrow-details.component';

describe('ArrowDetailsComponent', () => {
  let component: ArrowDetailsComponent;
  let fixture: ComponentFixture<ArrowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
