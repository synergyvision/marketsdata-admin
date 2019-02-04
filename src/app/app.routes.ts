import { Routes, RouterModule } from '@angular/router';
import { Error404PageComponent, Error404PageResolver } from './core';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

export const rootRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', loadChildren: './front-page/front-page.module#FrontPageModule'},
  {
    path: '404',
    component: Error404PageComponent,
    resolve: { data: Error404PageResolver }
  },
  {
    // There's a bug that's preventing wild card routes to be lazy loaded (see: https://github.com/angular/angular/issues/13848)
    // That's why the Error page should be eagerly loaded
    path: '**',
    component: Error404PageComponent,
    resolve: { data: Error404PageResolver }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(rootRoutes) ],
  exports: [RouterModule]
})
export class AppRoutes { }