import { CalendarPickerExampleComponent } from './calendar-picker-example/calendar-picker-example.component';
import { CalendarRangePickerExampleComponent } from './calendar-range-picker-example/calendar-range-picker-example.component';

//,...Routes.map(r => r.component)
export const Routes = [
  {
    path: 'calendar-picker',
    component: CalendarPickerExampleComponent
  },
  {
    path: 'calendarRange-picker',
    component: CalendarRangePickerExampleComponent
  }
];
