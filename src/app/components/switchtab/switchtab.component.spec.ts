import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchtabComponent } from './switchtab.component';

describe('SwitchtabComponent', () => {
  let component: SwitchtabComponent;
  let fixture: ComponentFixture<SwitchtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchtabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwitchtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
