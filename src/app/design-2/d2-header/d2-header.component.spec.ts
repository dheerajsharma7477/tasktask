import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D2HeaderComponent } from './d2-header.component';

describe('D2HeaderComponent', () => {
  let component: D2HeaderComponent;
  let fixture: ComponentFixture<D2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
