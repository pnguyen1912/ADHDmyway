import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmedicalPage } from './amedical.page';

describe('AmedicalPage', () => {
  let component: AmedicalPage;
  let fixture: ComponentFixture<AmedicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmedicalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmedicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
