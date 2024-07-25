import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogresponseCardComponent } from './dogresponse-card.component';

describe('DogresponseCardComponent', () => {
  let component: DogresponseCardComponent;
  let fixture: ComponentFixture<DogresponseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogresponseCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogresponseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
