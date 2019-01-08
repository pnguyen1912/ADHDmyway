import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellPage } from './well.page';

describe('WellPage', () => {
  let component: WellPage;
  let fixture: ComponentFixture<WellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
