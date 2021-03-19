import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TunggalPageRoutingModule } from './tunggal-routing.module';

import { TunggalPage } from './tunggal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TunggalPageRoutingModule
  ],
  declarations: [TunggalPage]
})
export class TunggalPageModule {}
