import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { TeachersService } from '../../services/teachers.service';
import * as TeachersActions from './teachers.actions';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class TeachersEffects {
  loadTeachers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TeachersActions.loadTeachers),
      mergeMap(() => this.teachersService.getTeachers()
        .pipe(
          map(teachers => TeachersActions.loadTeachersSuccess({ teachers })),
          catchError(error => {
            this.snackBar.open('Error al cargar profesores', 'Cerrar', {
              duration: 3000,
              panelClass: ['error-snackbar']
            });
            return of(TeachersActions.loadTeachersFailure({ error: error.message }));
          })
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private teachersService: TeachersService,
    private snackBar: MatSnackBar
  ) {}
} 