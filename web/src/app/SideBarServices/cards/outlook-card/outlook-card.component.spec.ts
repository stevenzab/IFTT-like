import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookCardComponent } from './outlook-card.component';

describe('OutlookCardComponent', () => {
  let component: OutlookCardComponent;
  let fixture: ComponentFixture<OutlookCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlookCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlookCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
