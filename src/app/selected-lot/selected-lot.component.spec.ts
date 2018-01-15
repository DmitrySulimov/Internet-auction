import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLotComponent } from './selected-lot.component';

describe('SelectedLotComponent', () => {
  let component: SelectedLotComponent;
  let fixture: ComponentFixture<SelectedLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
