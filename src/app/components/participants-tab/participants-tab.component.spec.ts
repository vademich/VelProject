import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsTabComponent } from './participants-tab.component';

describe('ParticipantsTabComponent', () => {
  let component: ParticipantsTabComponent;
  let fixture: ComponentFixture<ParticipantsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipantsTabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipantsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
