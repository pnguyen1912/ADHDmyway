import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcharacterPage } from './acharacter.page';

describe('AcharacterPage', () => {
  let component: AcharacterPage;
  let fixture: ComponentFixture<AcharacterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcharacterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcharacterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
