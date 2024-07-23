import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrampsComponent } from './breadcramps.component';

describe('BreadcrampsComponent', () => {
  let component: BreadcrampsComponent;
  let fixture: ComponentFixture<BreadcrampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrampsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BreadcrampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
