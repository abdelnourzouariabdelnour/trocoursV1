import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseoublierPage } from './passeoublier.page';

describe('PasseoublierPage', () => {
  let component: PasseoublierPage;
  let fixture: ComponentFixture<PasseoublierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasseoublierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasseoublierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
