import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeLotComponent } from './change-lot.component';

describe('ChangeLotComponent', () => {
  let component: ChangeLotComponent;
  let fixture: ComponentFixture<ChangeLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
