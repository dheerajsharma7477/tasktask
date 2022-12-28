import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3HeaderComponent } from './d3-header.component';

describe('D3HeaderComponent', () => {
  let component: D3HeaderComponent;
  let fixture: ComponentFixture<D3HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
