import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3AddTaskComponent } from './d3-add-task.component';

describe('D3AddTaskComponent', () => {
  let component: D3AddTaskComponent;
  let fixture: ComponentFixture<D3AddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3AddTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
