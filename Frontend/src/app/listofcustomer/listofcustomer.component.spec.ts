import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofcustomerComponent } from './listofcustomer.component';

describe('ListofcustomerComponent', () => {
  let component: ListofcustomerComponent;
  let fixture: ComponentFixture<ListofcustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofcustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
