import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyacountPage } from './myacount.page';

describe('MyacountPage', () => {
  let component: MyacountPage;
  let fixture: ComponentFixture<MyacountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyacountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyacountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
