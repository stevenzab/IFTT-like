import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserGenCardComponent } from './random-user-gen-card.component';

describe('RandomUserGenCardComponent', () => {
  let component: RandomUserGenCardComponent;
  let fixture: ComponentFixture<RandomUserGenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUserGenCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUserGenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
