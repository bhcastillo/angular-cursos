import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from '../../../classmodels/interfaces/cursos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acciones',
  templateUrl: './acciones.component.html',
  styleUrls: ['./acciones.component.css'],
})
export class AccionesComponent implements OnInit {
  @Input() curso: Curso;
  @Output() edit: EventEmitter<Curso> = new EventEmitter<Curso>();
  @Output() delete: EventEmitter<Curso> = new EventEmitter<Curso>();
  ngOnInit(): void {}
  constructor(private router: Router){}
  EditarCurso(curso: Curso) {
    console.log('desde hijo', curso);
    this.edit.emit(curso);
    this.router.navigate([`curso/${curso.id}`]);
  }
  EliminarCurso(curso: Curso) {
    console.log('desde hijo', curso);
    this.delete.emit(curso);
  }
}
