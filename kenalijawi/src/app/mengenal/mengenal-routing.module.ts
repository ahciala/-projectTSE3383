import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MengenalPage } from './mengenal.page';

const routes: Routes = [
  {
    path: '',
    component: MengenalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MengenalPageRoutingModule {}
