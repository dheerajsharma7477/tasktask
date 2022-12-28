import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D1OffersComponent } from './d1-offers.component';

describe('D1OffersComponent', () => {
  let component: D1OffersComponent;
  let fixture: ComponentFixture<D1OffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D1OffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D1OffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
