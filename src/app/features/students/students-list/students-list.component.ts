import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student } from '../../../core/interfaces/student.interface';
import * as StudentsActions from '../../../core/store/students/students.actions';

@Component({
  selector: 'app-students-list',
  template: `
    <div class="students-container">
      <mat-card>
        <mat-card-title>Estudiantes</mat-card-title>
        <mat-card-content>
          <button mat-raised-button color="primary" (click)="openAddDialog()">
            Agregar Estudiante
          </button>
          
          <mat-table [dataSource]="students$ | async">
            <ng-container matColumnDef="name">
              <mat-header-cell *matHeaderCellDef> Nombre </mat-header-cell>
              <mat-cell *matCellDef="let student"> {{student.name}} </mat-cell>
            </ng-container>

            <ng-container matColumnDef="email">
              <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>
              <mat-cell *matCellDef="let student"> {{student.email}} </mat-cell>
            </ng-container>

            <ng-container matColumnDef="actions">
              <mat-header-cell *matHeaderCellDef> Acciones </mat-header-cell>
              <mat-cell *matCellDef="let student">
                <button mat-icon-button (click)="editStudent(student)">
                  <mat-icon>edit</mat-icon>
                </button>
                <button mat-icon-button (click)="deleteStudent(student.id)">
                  <mat-icon>delete</mat-icon>
                </button>
              </mat-cell>
            </ng-container>

            <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
            <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
          </mat-table>
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class StudentsListComponent implements OnInit {
  students$: Observable<Student[]>;
  displayedColumns = ['name', 'email', 'actions'];

  constructor(private store: Store) {
    this.students$ = this.store.select(state => state.students.students);
  }

  ngOnInit() {
    this.store.dispatch(StudentsActions.loadStudents());
  }

  openAddDialog() {
    // Implementar diálogo de agregar
  }

  editStudent(student: Student) {
    // Implementar diálogo de edición
  }

  deleteStudent(id: number) {
    this.store.dispatch(StudentsActions.deleteStudent({ id }));
  }
} 