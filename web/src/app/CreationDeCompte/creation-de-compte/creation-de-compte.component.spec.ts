import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationDeCompteComponent } from './creation-de-compte.component';

describe('CreationDeCompteComponent', () => {
  let component: CreationDeCompteComponent;
  let fixture: ComponentFixture<CreationDeCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreationDeCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreationDeCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
