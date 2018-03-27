import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NxModule} from '@nrwl/nx';
import {RouterModule} from '@angular/router';
import {SharedModule} from '@Worksheet/shared';
import { CalendarPickerComponent } from './calendar-picker/calendar-picker.component'

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], {initialNavigation: 'enabled'})
  ],
  declarations: [AppComponent, CalendarPickerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
