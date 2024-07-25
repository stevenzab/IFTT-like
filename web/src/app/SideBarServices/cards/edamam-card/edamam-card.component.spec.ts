import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdamamCardComponent } from './edamam-card.component';

describe('EdamamCardComponent', () => {
  let component: EdamamCardComponent;
  let fixture: ComponentFixture<EdamamCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdamamCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdamamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
