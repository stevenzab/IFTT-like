import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomUserGenContentComponent } from './random-user-gen-content.component';

describe('RandomUserGenContentComponent', () => {
  let component: RandomUserGenContentComponent;
  let fixture: ComponentFixture<RandomUserGenContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomUserGenContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomUserGenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
