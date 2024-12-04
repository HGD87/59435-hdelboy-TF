import { createAction, props } from '@ngrx/store';
import { Student } from '../../interfaces/student.interface';

export const loadStudents = createAction('[Students] Load Students');
export const loadStudentsSuccess = createAction(
  '[Students] Load Students Success',
  props<{ students: Student[] }>()
);
export const addStudent = createAction(
  '[Students] Add Student',
  props<{ student: Student }>()
);
export const updateStudent = createAction(
  '[Students] Update Student',
  props<{ student: Student }>()
);
export const deleteStudent = createAction(
  '[Students] Delete Student',
  props<{ id: number }>()
); 