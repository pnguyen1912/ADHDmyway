import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparentPage } from './aparent.page';

describe('AparentPage', () => {
  let component: AparentPage;
  let fixture: ComponentFixture<AparentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
