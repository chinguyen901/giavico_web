import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('@giavico-web/data-access').then(
        (m) => m.FormulatorWorkbenchComponent
      ),
  },
  {
    path: 'formulas/:id',
    loadComponent: () =>
      import('@giavico-web/data-access').then((m) => m.FormulaDetailComponent),
  },
];
