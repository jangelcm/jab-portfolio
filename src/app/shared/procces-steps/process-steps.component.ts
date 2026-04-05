import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ClipboardCheck, Layout, Code2, Rocket, Gauge } from 'lucide-angular';

@Component({
  selector: 'app-process-steps',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './process-steps.component.html'
})
export class ProcessStepsComponent {
  phases = signal([
    {
      id: '01',
      title: 'Análisis & Arquitectura',
      desc: 'Análisis de requerimientos, definición de Stack técnico y planeación de infraestructura Cloud.',
      icon: ClipboardCheck,
      color: 'text-primary'
    },
    {
      id: '02',
      title: 'Diseño UX/UI Ejecutivo',
      desc: 'Prototipado de alta fidelidad con enfoque en conversión, Glassmorphism y layouts bento.',
      icon: Layout,
      color: 'text-secondary'
    },
    {
      id: '03',
      title: 'Desarrollo Angular 19',
      desc: 'Codificación limpia usando Signals, Zoneless y SSR para máxima velocidad y SEO técnico.',
      icon: Code2,
      color: 'text-primary'
    },
    {
      id: '04',
      title: 'Optimización de Core Web Vitals',
      desc: 'Ajuste fino de LCP, FID y CLS para garantizar un rendimiento superior al 95% en Lighthouse.',
      icon: Gauge,
      color: 'text-secondary'
    },
    {
      id: '05',
      title: 'QA & Deployment',
      desc: 'Pruebas unitarias, validación de DNS y despliegue automatizado en entornos productivos.',
      icon: Rocket,
      color: 'text-primary'
    }
  ]);

}