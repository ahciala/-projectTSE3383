import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MahramPageRoutingModule } from './mahram-routing.module';

import { MahramPage } from './mahram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MahramPageRoutingModule
  ],
  declarations: [MahramPage]
})
export class MahramPageModule {}
