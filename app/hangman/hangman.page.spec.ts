import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanPage } from './hangman.page';

describe('HangmanPage', () => {
  let component: HangmanPage;
  let fixture: ComponentFixture<HangmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangmanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
