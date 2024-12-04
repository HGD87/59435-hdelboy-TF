import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as TeachersActions from '../../../core/store/teachers/teachers.actions';

@Component({
  selector: 'app-teacher-form',
  template: `
    <div class="container">
      <h2>{{ isEditing ? 'Editar' : 'Agregar' }} Profesor</h2>
      <form [formGroup]="teacherForm" (ngSubmit)="onSubmit()" class="mt-3">
        <div class="mb-3">
          <label class="form-label">Nombre</label>
          <input type="text" class="form-control" formControlName="name">
          <div class="text-danger" *ngIf="teacherForm.get('name')?.errors?.['required'] && teacherForm.get('name')?.touched">
            El nombre es requerido
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" formControlName="email">
          <div class="text-danger" *ngIf="teacherForm.get('email')?.errors?.['email']">
            Email inválido
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Materia</label>
          <input type="text" class="form-control" formControlName="subject">
        </div>

        <div class="d-flex justify-content-end gap-2">
          <button type="button" class="btn btn-secondary" (click)="onCancel()">Cancelar</button>
          <button type="submit" class="btn btn-primary" [disabled]="teacherForm.invalid">
            {{ isEditing ? 'Actualizar' : 'Guardar' }}
          </button>
        </div>
      </form>
    </div>
  `
})
export class TeacherFormComponent implements OnInit {
  teacherForm: FormGroup;
  isEditing = false;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<TeacherFormComponent>,
    private store: Store,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.teacherForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.data?.teacher) {
      this.isEditing = true;
      this.teacherForm.patchValue(this.data.teacher);
    }
  }

  onSubmit() {
    if (this.teacherForm.valid) {
      const teacher = this.teacherForm.value;
      if (this.isEditing) {
        this.store.dispatch(TeachersActions.updateTeacher({ teacher: { ...teacher, id: this.data.teacher.id } }));
      } else {
        this.store.dispatch(TeachersActions.addTeacher({ teacher }));
      }
      this.dialogRef.close();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
} 