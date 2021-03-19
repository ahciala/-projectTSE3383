import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjnabiPage } from './ajnabi.page';

const routes: Routes = [
  {
    path: '',
    component: AjnabiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjnabiPageRoutingModule {}
