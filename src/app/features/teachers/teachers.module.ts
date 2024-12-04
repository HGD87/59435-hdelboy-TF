import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [TeachersListComponent, TeacherFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class TeachersModule { } 