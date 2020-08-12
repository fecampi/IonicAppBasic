import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstruturaPage } from './estrutura.page';

const routes: Routes = [
  {
    path: '',
    component: EstruturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstruturaPageRoutingModule {}
