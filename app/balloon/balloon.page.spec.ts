import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonPage } from './balloon.page';

describe('BalloonPage', () => {
  let component: BalloonPage;
  let fixture: ComponentFixture<BalloonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalloonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
