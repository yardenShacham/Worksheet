import * as React from "react";
import * as moment from 'moment';
import * as ReactDom from 'react-dom';
import * as RcDesign from 'rc-design';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.scss']
})
export class CalendarPickerComponent implements OnInit {

  constructor() {
  }

  isPastDay(date) {
    return moment().diff(date, 'd') > 0;
  };

  ngOnInit() {
    ReactDom.render(
      React.createElement(RcDesign.DatePicker,
        {isDateDisable: (date) => this.isPastDay(date)}, null)
      , document.getElementById('calendar-angular-container'));
  }

}
