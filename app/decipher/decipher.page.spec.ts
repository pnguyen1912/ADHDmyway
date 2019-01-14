import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecipherPage } from './decipher.page';

describe('DecipherPage', () => {
  let component: DecipherPage;
  let fixture: ComponentFixture<DecipherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecipherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecipherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
