import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PornhubContentComponent } from './pornhub-content.component';

describe('PornhubContentComponent', () => {
  let component: PornhubContentComponent;
  let fixture: ComponentFixture<PornhubContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PornhubContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PornhubContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
