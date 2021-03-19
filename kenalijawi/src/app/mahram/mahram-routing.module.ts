import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MahramPage } from './mahram.page';

const routes: Routes = [
  {
    path: '',
    component: MahramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MahramPageRoutingModule {}
