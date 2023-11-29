import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  cursos: any[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.carregarCursos();
  }

  carregarCursos() {
    this.cursoService.getCursos().subscribe((data: any) => {
      this.cursos = data;
    });
  }

  excluirCurso(id: number) {
    if (confirm('Deseja realmente excluir o curso?')) {
      this.cursoService.excluirCurso(id).subscribe(() => {
        this.carregarCursos();
      });
    }
  }
}