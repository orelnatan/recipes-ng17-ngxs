import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { coreRoutes } from './core/core.routes';

const routes: Routes = [
  { 
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { 
    path: '',
    loadComponent: () => import('./core/core-root.component').then(core => core.CoreRootComponent),
    children: [ ...coreRoutes ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
