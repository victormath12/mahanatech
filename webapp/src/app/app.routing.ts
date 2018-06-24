import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
 { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
 // { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
 // { path: 'cursos', loadChildren: 'app/pages/cursos/cursos.module#CursosModule' },
 { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
