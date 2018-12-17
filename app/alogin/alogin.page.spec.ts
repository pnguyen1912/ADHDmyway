import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AloginPage } from './alogin.page';

describe('AloginPage', () => {
  let component: AloginPage;
  let fixture: ComponentFixture<AloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AloginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
