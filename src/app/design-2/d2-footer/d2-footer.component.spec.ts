import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D2FooterComponent } from './d2-footer.component';

describe('D2FooterComponent', () => {
  let component: D2FooterComponent;
  let fixture: ComponentFixture<D2FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D2FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
