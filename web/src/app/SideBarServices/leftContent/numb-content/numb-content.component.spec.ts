import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbContentComponent } from './numb-content.component';

describe('NumbContentComponent', () => {
  let component: NumbContentComponent;
  let fixture: ComponentFixture<NumbContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumbContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
