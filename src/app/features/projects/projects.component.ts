import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-projects',
    imports: [CommonModule, RouterLink],
    templateUrl: './projects.component.html',
})
export class ProjectsComponent {
    // Definición de Proyectos usando Signals
    projects = signal([
        {
            title: 'Exactus',
            description: 'Plataforma de optimización de procesos corporativos. Enfoque en performance y SEO técnico.',
            tags: ['Angular 19', 'NestJS', 'SEO', 'Git'],
            route: '/projects/exactus', // Ruta interna
            externalUrl: 'https://exactus.pe/',
            featured: true,
            // icon: Zap
        },
        {
            title: 'Diale Podología',
            description: 'Sitio web clínico con diseño UI/UX ejecutivo y agendamiento optimizado.',
            tags: ['Angular 19', 'Git', 'UX', 'Mobile First'],
            route: '/projects/diale', // Ruta interna
            externalUrl: 'https://dialepodologia.com/',
            featured: true,
            // icon: BriefcaseBusiness
        },
        {
            title: 'Proyecto Alpha',
            description: 'E-commerce de alto rendimiento (En Desarrollo).',
            tags: ['Angular 19', 'Signals', 'Zoneless'],
            route: '/projects/alpha',
            featured: false,
            // icon: BriefcaseBusiness
        },
        {
            title: 'Proyecto Beta',
            description: 'Arquitectura Cloud para gestión de datos (Concepto).',
            tags: ['NestJS', 'AWS', 'Docker'],
            route: '/projects/beta',
            featured: false,
            // icon: BriefcaseBusiness
        }
    ]);
}