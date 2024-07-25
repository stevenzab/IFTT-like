import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleContentComponent } from './google-content.component';

describe('GoogleContentComponent', () => {
  let component: GoogleContentComponent;
  let fixture: ComponentFixture<GoogleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
