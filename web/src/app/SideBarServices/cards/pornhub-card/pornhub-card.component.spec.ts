import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PornhubCardComponent } from './pornhub-card.component';

describe('PornhubCardComponent', () => {
  let component: PornhubCardComponent;
  let fixture: ComponentFixture<PornhubCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PornhubCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PornhubCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
