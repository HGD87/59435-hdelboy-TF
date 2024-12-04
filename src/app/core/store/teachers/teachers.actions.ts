import { createAction, props } from '@ngrx/store';
import { Teacher } from '../../interfaces/teacher.interface';

export const loadTeachers = createAction('[Teachers] Load Teachers');
export const loadTeachersSuccess = createAction(
  '[Teachers] Load Teachers Success',
  props<{ teachers: Teacher[] }>()
);
export const loadTeachersFailure = createAction(
  '[Teachers] Load Teachers Failure',
  props<{ error: string }>()
);
export const addTeacher = createAction(
  '[Teachers] Add Teacher',
  props<{ teacher: Teacher }>()
);
export const updateTeacher = createAction(
  '[Teachers] Update Teacher',
  props<{ teacher: Teacher }>()
);
export const deleteTeacher = createAction(
  '[Teachers] Delete Teacher',
  props<{ id: number }>()
); 