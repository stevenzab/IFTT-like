import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamCardComponent } from './steam-card.component';

describe('SteamCardComponent', () => {
  let component: SteamCardComponent;
  let fixture: ComponentFixture<SteamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteamCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
