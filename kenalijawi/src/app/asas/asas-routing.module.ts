import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsasPage } from './asas.page';

const routes: Routes = [
  {
    path: '',
    component: AsasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsasPageRoutingModule {}
