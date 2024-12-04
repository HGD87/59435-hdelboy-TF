import { createReducer, on } from '@ngrx/store';
import * as StudentsActions from './students.actions';
import { Student } from '../../interfaces/student.interface';

export interface StudentsState {
  students: Student[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentsState = {
  students: [],
  loading: false,
  error: null
};

export const studentsReducer = createReducer(
  initialState,
  on(StudentsActions.loadStudents, state => ({
    ...state,
    loading: true
  })),
  on(StudentsActions.loadStudentsSuccess, (state, { students }) => ({
    ...state,
    students,
    loading: false
  }))
); 