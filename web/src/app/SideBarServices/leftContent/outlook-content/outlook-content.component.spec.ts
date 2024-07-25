import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlookContentComponent } from './outlook-content.component';

describe('OutlookContentComponent', () => {
  let component: OutlookContentComponent;
  let fixture: ComponentFixture<OutlookContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlookContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutlookContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
