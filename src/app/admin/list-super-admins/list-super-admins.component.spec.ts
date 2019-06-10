import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSuperAdminsComponent } from './list-super-admins.component';

describe('ListSuperAdminsComponent', () => {
  let component: ListSuperAdminsComponent;
  let fixture: ComponentFixture<ListSuperAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSuperAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSuperAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
