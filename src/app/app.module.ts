import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { SecondsComponent } from './clock/seconds/seconds.component';
import { MinutesComponent } from './clock/minutes/minutes.component';
import { HoursComponent } from './clock/hours/hours.component';
import { DigitalClockComponent } from './clock/digital-clock/digital-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    SecondsComponent,
    MinutesComponent,
    HoursComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
