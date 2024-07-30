import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditiveServiceComponent } from './additive-service.component';

describe('AdditiveServiceComponent', () => {
  let component: AdditiveServiceComponent;
  let fixture: ComponentFixture<AdditiveServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditiveServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditiveServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
