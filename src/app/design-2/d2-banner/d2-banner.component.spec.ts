import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D2BannerComponent } from './d2-banner.component';

describe('D2BannerComponent', () => {
  let component: D2BannerComponent;
  let fixture: ComponentFixture<D2BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D2BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D2BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
