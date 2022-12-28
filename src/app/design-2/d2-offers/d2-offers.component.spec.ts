import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D2OffersComponent } from './d2-offers.component';

describe('D2OffersComponent', () => {
  let component: D2OffersComponent;
  let fixture: ComponentFixture<D2OffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D2OffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D2OffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
