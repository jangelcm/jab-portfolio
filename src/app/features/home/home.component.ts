import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { ProcessStepsComponent } from '../../shared/procces-steps/process-steps.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, ProjectsComponent, ContactComponent, ProcessStepsComponent]
})
export class HomeComponent implements OnInit {
    private readonly title = inject(Title);
    private readonly meta = inject(Meta);
    openGroup = signal<number | null>(null);

    techGroups = [
        {
            title: 'Front-end',
            icon: 'code',
            technologies: [
                { name: 'Typescript', icon: 'file-code', years: 4 },
                { name: 'Angular 12+', icon: 'angular', years: 4 },
                { name: 'HTML', icon: 'file-text', years: 4 },
                { name: 'CSS', icon: 'css3', years: 4 },
                { name: 'TailwindCSS', icon: 'wind', years: 1 },
            ],
        },
        {
            title: 'Backend',
            icon: 'server',
            technologies: [
                { name: 'Java', icon: 'coffee', years: 4 },
                { name: 'Spring Boot', icon: 'leaf', years: 4 },
                { name: 'Spring Security', icon: 'shield', years: 3 },
                { name: 'Spring Data', icon: 'database', years: 3 },
            ],
        },
        {
            title: 'Gestores de base de datos',
            icon: 'database',
            technologies: [
                { name: 'Oracle', icon: 'database', years: 4 },
                { name: 'SQL Server', icon: 'database', years: 3 },
                { name: 'MySQL', icon: 'database', years: 1 },
            ],
        },
        {
            title: 'Controladores de versiones',
            icon: 'git-branch',
            technologies: [
                { name: 'Git', icon: 'git-branch', years: 3 },
                { name: 'SVN', icon: 'git-commit', years: 3 },
            ],
        },
    ];

    services = signal([
        {
            title: 'Desarrollo Angular 19',
            description: 'Interfaces de alto rendimiento con Signals, Zoneless y SSR para una experiencia de usuario instantánea.',
            // icon: Layers3, // Icono de capas para arquitectura
            featured: false // Usaremos esto para que la tarjeta sea más grande
        },
        {
            title: 'Optimización SEO Técnico',
            description: 'Mejoramos tu LCP, SEO on-page y sitemaps para dominar los resultados de búsqueda de Google.',
            // icon: SearchCheck, // Icono de búsqueda con check
            featured: false
        },
        {
            title: 'Diseño UI/UX Ejecutivo',
            description: 'Interfaces limpias y profesionales con efecto Glassmorphism y layouts Bento para tu marca.',
            // icon: LayoutGrid, // Icono de cuadrícula para Bento
            featured: false
        }
    ]);

    ngOnInit(): void {
        this.title.setTitle('JAngel | Experto en Angular 19 y Fundador de JAB Digital Studio');
        this.meta.updateTag({
            name: 'description',
            content: 'Desarrollo web de alto rendimiento con las mejores tecnologías. Especialista en SEO técnico y arquitecturas escalables para empresas.'
        });
    }
}