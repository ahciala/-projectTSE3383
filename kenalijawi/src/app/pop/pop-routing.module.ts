import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopPage } from './pop.page';

const routes: Routes = [
  {
    path: '',
    component: PopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopPageRoutingModule {}
