import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendar-picker-example',
  templateUrl: './calendar-picker-example.component.html',
  styleUrls: ['./calendar-picker-example.component.scss']
})
export class CalendarPickerExampleComponent implements OnInit {

  constructor() {
  }

  selectedStartDate;
  selectedEndDate;
  dateFormat = "YYYY-MM-DD";

  onStartDateChanged(date) {
    this.selectedStartDate = date;
  }

  onEndDateChanged(date) {
    this.selectedEndDate = date;
  }

  ngOnInit() {
  }

}
