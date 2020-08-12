import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'botoes', loadChildren: './botoes/botoes.module#BotoesPageModule' },
  { path: 'lista', loadChildren: './lista/lista.module#ListaPageModule' },
  {
    path: 'estrutura',
    loadChildren: () => import('./estrutura/estrutura.module').then( m => m.EstruturaPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'entrada',
    loadChildren: () => import('./entrada/entrada.module').then( m => m.EntradaPageModule)
  },
  {
    path: 'databiding',
    loadChildren: () => import('./databiding/databiding.module').then( m => m.DatabidingPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
