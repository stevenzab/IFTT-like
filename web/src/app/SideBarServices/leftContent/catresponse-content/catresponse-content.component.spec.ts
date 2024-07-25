import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatresponseContentComponent } from './catresponse-content.component';

describe('CatresponseContentComponent', () => {
  let component: CatresponseContentComponent;
  let fixture: ComponentFixture<CatresponseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatresponseContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatresponseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
