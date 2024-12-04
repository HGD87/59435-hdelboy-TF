import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { EventFormComponent } from './event-form/event-form.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [CalendarViewComponent, EventFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CalendarModule { } 