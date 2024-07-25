import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactContentComponent } from './fact-content.component';

describe('FactContentComponent', () => {
  let component: FactContentComponent;
  let fixture: ComponentFixture<FactContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
