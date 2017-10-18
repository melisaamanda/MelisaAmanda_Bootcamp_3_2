import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofunitComponent } from './listofunit.component';

describe('ListofunitComponent', () => {
  let component: ListofunitComponent;
  let fixture: ComponentFixture<ListofunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
