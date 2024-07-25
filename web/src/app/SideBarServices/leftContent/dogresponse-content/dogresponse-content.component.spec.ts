import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogresponseContentComponent } from './dogresponse-content.component';

describe('DogresponseContentComponent', () => {
  let component: DogresponseContentComponent;
  let fixture: ComponentFixture<DogresponseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogresponseContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogresponseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
