import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabidingPage } from './databiding.page';

const routes: Routes = [
  {
    path: '',
    component: DatabidingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatabidingPageRoutingModule {}
