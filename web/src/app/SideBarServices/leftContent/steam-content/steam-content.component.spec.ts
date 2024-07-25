import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamContentComponent } from './steam-content.component';

describe('SteamContentComponent', () => {
  let component: SteamContentComponent;
  let fixture: ComponentFixture<SteamContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteamContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteamContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
