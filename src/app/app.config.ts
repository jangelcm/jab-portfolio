import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes,
    withComponentInputBinding(),
    withEnabledBlockingInitialNavigation(),
    // CONFIGURACIÓN PRO: Habilita el scroll suave nativo
    withInMemoryScrolling({
      anchorScrolling: 'enabled', // Activa el scroll a #anchors
      scrollPositionRestoration: 'enabled' // Restaura la posición al navegar atrás
    })
  ),]
};
