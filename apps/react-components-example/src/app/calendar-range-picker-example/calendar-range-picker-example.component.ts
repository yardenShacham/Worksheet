import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-range-picker-example',
  templateUrl: './calendar-range-picker-example.component.html',
  styleUrls: ['./calendar-range-picker-example.component.scss']
})
export class CalendarRangePickerExampleComponent implements OnInit {
  constructor() {
  }

  selectedDateRange;
  dateFormat = 'YYYY-MM-DD';

  onDateRangeChanged(selectedDateRange) {
    this.selectedDateRange = selectedDateRange
  }

  ngOnInit() {
  }
}
