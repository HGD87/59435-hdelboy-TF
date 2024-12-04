import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="dashboard-container">
      <mat-sidenav-container>
        <mat-sidenav mode="side" opened>
          <mat-nav-list>
            <a mat-list-item routerLink="students">Estudiantes</a>
            <a mat-list-item routerLink="teachers">Profesores</a>
            <a mat-list-item routerLink="calendar">Calendario</a>
          </mat-nav-list>
        </mat-sidenav>
        <mat-sidenav-content>
          <div class="dashboard-content">
            <div class="stats-cards">
              <mat-card>
                <mat-card-title>Estudiantes</mat-card-title>
                <mat-card-content>
                  <h2>{{ (studentCount$ | async) || 0 }}</h2>
                </mat-card-content>
              </mat-card>
              <!-- Similar cards for teachers and events -->
            </div>
            <router-outlet></router-outlet>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  studentCount$: Observable<number>;

  constructor(private store: Store) {
    this.studentCount$ = this.store.select(state => state.students.total);
  }

  ngOnInit() {
    // Dispatch actions to load initial data
  }
} 