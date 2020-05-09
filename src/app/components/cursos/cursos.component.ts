import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Curso } from 'src/app/classmodels/interfaces/cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  titulo: string = 'Lista de Cursos';
  anchoImagen: string = '40px';
  textofiltro: string = '';
  @ViewChild('filtro', { static: false }) filtro: ElementRef;
  constructor() {}
  ngAfterViewInit(): void {
    this.filtro.nativeElement.value = 'Angular';
  }
  ngOnInit(): void {}

  cursos: Curso[] = [
    {
      id: 1,
      name: 'TypeScript Desde Cero',
      startDate: 'August 10, 2019',
      description:
        'Lleva JavaScript al siguiente nivel con tipado estático y programación orientada a objetos',
      price: 25.99,
      rating: 4.5,
      imageUrl: 'assets/images/typescript.png',
    },
    {
      id: 2,
      name: 'Angular Desde Cero',
      startDate: 'September 4, 2019',
      description: 'Aprende el framework frontend con más demanda del mercado',
      price: 29.99,
      rating: 5,
      imageUrl: 'assets/images/angular.png',
    },
    {
      id: 3,
      name: 'Formularios y APIs con Angular',
      startDate: 'October 20, 2019',
      description:
        'Aprende a consumir datos de APIs Rest y a gestionar formularios con Angular',
      price: 23.5,
      rating: 3.9,
      imageUrl: 'assets/images/angular.png',
    },
  ];
  onEditCurso(curso: Curso) {
    console.log('desde padre', curso);
  }
  onDeleteCurso(curso: Curso) {
    console.log('desde padre', curso);
    this.cursos = this.cursos.filter((c) => {
      return c.id !== curso.id;
    });
  }
}
