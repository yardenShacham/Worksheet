import * as React from "react";
import * as moment from 'moment';
import * as ReactDom from 'react-dom';
import {DatePicker} from 'rc-design';
import {Component, Input, OnInit, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-calendar-picker',
  templateUrl: './calendar-picker.component.html',
  styleUrls: ['./calendar-picker.component.scss']
})

export class CalendarPickerComponent implements OnInit, AfterViewInit {

  constructor() {
  }

  @Input() isDateDisable;
  @Input() key;
  conatinerId;

  getContainerId() {
    return `calendar-angular-container-${this.key}`;
  }

  isPastDay(date) {
    return moment().diff(date, 'd') > 0;
  };

  ngAfterViewInit() {
    ReactDom.render(
      React.createElement(DatePicker,
        {isDateDisable: this.isDateDisable}, null)
      , document.getElementById(this.getContainerId()));
  }

  ngOnInit() {
    this.conatinerId = this.getContainerId();
    this.isDateDisable = this.isDateDisable || this.isPastDay;
  }
}
