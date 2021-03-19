import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TunggalPage } from './tunggal.page';

const routes: Routes = [
  {
    path: '',
    component: TunggalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TunggalPageRoutingModule {}
