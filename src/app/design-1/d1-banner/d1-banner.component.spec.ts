import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D1BannerComponent } from './d1-banner.component';

describe('D1BannerComponent', () => {
  let component: D1BannerComponent;
  let fixture: ComponentFixture<D1BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D1BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D1BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
