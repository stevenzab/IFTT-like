import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpCardComponent } from './ip-card.component';

describe('IpCardComponent', () => {
  let component: IpCardComponent;
  let fixture: ComponentFixture<IpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
