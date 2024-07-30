import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TracksContainerComponent } from './tracks-container.component';

describe('TracksContainerComponent', () => {
  let component: TracksContainerComponent;
  let fixture: ComponentFixture<TracksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TracksContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TracksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
