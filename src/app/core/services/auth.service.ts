import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.get('/assets/db.json').pipe(
      map((data: any) => {
        const user = data.users.find(
          (u: any) => u.username === username && u.password === password
        );
        if (user) {
          return { success: true, user };
        }
        throw new Error('Credenciales inválidas');
      })
    );
  }
} 