import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'template',
    loadChildren: () => import('./template/template.module').then((m) => m.TemplateModule),
  },
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.module').then((m) => m.ReactiveModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'selector',
    loadChildren: () => import('./selector/selector.module').then((m) => m.SelectorModule),
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule),
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipesModule),
  },
  {
    path: '**',
    redirectTo: 'template',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true,
      // useHash: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
