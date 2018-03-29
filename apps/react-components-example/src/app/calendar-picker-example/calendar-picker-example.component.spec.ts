import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPickerExampleComponent } from './calendar-picker-example.component';

describe('CalendarPickerExampleComponent', () => {
  let component: CalendarPickerExampleComponent;
  let fixture: ComponentFixture<CalendarPickerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarPickerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
