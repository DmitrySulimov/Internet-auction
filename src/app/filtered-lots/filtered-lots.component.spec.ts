import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredLotsComponent } from './filtered-lots.component';

describe('FilteredLotsComponent', () => {
  let component: FilteredLotsComponent;
  let fixture: ComponentFixture<FilteredLotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteredLotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
