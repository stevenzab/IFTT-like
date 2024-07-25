import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdamamContentComponent } from './edamam-content.component';

describe('EdamamContentComponent', () => {
  let component: EdamamContentComponent;
  let fixture: ComponentFixture<EdamamContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdamamContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdamamContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
