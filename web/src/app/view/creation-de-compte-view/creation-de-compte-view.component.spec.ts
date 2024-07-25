import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDeCompteViewComponent } from './creation-de-compte-view.component';

describe('CreationDeCompteViewComponent', () => {
  let component: CreationDeCompteViewComponent;
  let fixture: ComponentFixture<CreationDeCompteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationDeCompteViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationDeCompteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
