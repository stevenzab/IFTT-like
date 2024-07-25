import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenContentComponent } from './kitten-content.component';

describe('KittenContentComponent', () => {
  let component: KittenContentComponent;
  let fixture: ComponentFixture<KittenContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittenContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittenContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
