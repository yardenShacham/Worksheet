import * as React from 'react';
import * as moment from 'moment';
import * as ReactDom from 'react-dom';
import {DateRangePicker} from 'rc-design';
import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-calendar-range-picker',
  templateUrl: './calendar-range-picker.component.html',
  styleUrls: ['./calendar-range-picker.component.scss']
})
export class CalendarRangePickerComponent implements OnInit, AfterViewInit {
  constructor() {
  }

  @Output() dateRangeChange = new EventEmitter();
  @Input() isDateDisable;
  @Input() key;
  @Input() selectedRange;
  conatinerId;

  onChange = date => {
    this.dateRangeChange.emit(date);
  };

  getContainerId() {
    return `calendar-angular-container-${this.key}`;
  }

  isPastDay(date) {
    return moment().diff(date, 'd') > 0;
  }

  ngAfterViewInit() {
    ReactDom.render(
      React.createElement(
        DateRangePicker,
        {
          isDateDisable: this.isDateDisable,
          selectedRange: this.selectedRange,
          onChange: this.onChange
        },
        null
      ),
      document.getElementById(this.getContainerId())
    );
  }

  ngOnInit() {
    this.conatinerId = this.getContainerId();
    this.isDateDisable = this.isDateDisable || this.isPastDay;
  }
}
