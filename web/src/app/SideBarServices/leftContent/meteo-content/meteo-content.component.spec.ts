import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeteoContentComponent } from './meteo-content.component';

describe('MeteoContentComponent', () => {
  let component: MeteoContentComponent;
  let fixture: ComponentFixture<MeteoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeteoContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeteoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
