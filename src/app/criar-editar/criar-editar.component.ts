import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-criar-editar',
  templateUrl: './criar-editar.component.html',
  styleUrls: ['./criar-editar.component.css'],
})
export class CriarEditarComponent implements OnInit {
  curso: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.cursoService.getCurso(id).subscribe((data: any) => {
        this.curso = data;
      });
    }
  }

  salvarCurso() {
    this.cursoService.salvarCurso(this.curso).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}