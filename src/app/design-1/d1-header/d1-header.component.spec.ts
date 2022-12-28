import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D1HeaderComponent } from './d1-header.component';

describe('D1HeaderComponent', () => {
  let component: D1HeaderComponent;
  let fixture: ComponentFixture<D1HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D1HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D1HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
