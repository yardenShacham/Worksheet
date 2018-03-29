import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRangePickerExampleComponent } from './calendar-range-picker-example.component';

describe('CalendarRangePickerExampleComponent', () => {
  let component: CalendarRangePickerExampleComponent;
  let fixture: ComponentFixture<CalendarRangePickerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarRangePickerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarRangePickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
