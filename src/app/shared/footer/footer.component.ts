import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// Importa LucideAngularModule y los iconos (Linkedin, Github, Zap)
import { LucideAngularModule, Linkedin, Github, Zap } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  // Año actual usando un Signal (reactivo)
  currentYear = signal(new Date().getFullYear());

  // Definición de Iconos
  iconLinkedin = Linkedin;
  iconGithub = Github;
  iconZap = Zap;
}