import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D1FooterComponent } from './d1-footer.component';

describe('D1FooterComponent', () => {
  let component: D1FooterComponent;
  let fixture: ComponentFixture<D1FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D1FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
