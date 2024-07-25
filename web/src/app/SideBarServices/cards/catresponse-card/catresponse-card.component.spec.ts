import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatresponseCardComponent } from './catresponse-card.component';

describe('CatresponseCardComponent', () => {
  let component: CatresponseCardComponent;
  let fixture: ComponentFixture<CatresponseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatresponseCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatresponseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
