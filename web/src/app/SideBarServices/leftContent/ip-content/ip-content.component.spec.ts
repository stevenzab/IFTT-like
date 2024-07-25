import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpContentComponent } from './ip-content.component';

describe('IpContentComponent', () => {
  let component: IpContentComponent;
  let fixture: ComponentFixture<IpContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
