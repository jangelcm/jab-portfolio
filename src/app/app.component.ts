import { Component, inject } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected readonly router = inject(Router);
}
