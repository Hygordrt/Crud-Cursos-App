import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  private apiUrl = 'http://localhost:3000/api/cursos';

  constructor(private http: HttpClient) {}

  getCursos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getCurso(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  salvarCurso(curso: any): Observable<any> {
    if (curso.id) {
      return this.http.put<any>(`${this.apiUrl}/${curso.id}`, curso);
    } else {
      return this.http.post<any>(this.apiUrl, curso);
    }
  }

  excluirCurso(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}