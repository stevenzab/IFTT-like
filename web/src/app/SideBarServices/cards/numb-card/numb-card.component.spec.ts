import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbCardComponent } from './numb-card.component';

describe('NumbCardComponent', () => {
  let component: NumbCardComponent;
  let fixture: ComponentFixture<NumbCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
