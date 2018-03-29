import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NxModule} from '@nrwl/nx';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@Worksheet/shared';
import {Routes} from './app.routes';
import {CalendarPickerComponent} from './calendar-picker/calendar-picker.component';
import {CalendarRangePickerComponent} from './calendar-range-picker/calendar-range-picker.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    NxModule.forRoot(),
    RouterModule.forRoot(Routes, {initialNavigation: 'enabled'})
  ],
  declarations: [
    AppComponent,
    CalendarPickerComponent,
    CalendarRangePickerComponent, ...Routes.map(r => r.component)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
