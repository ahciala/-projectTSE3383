import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HukumPageRoutingModule } from './hukum-routing.module';

import { HukumPage } from './hukum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HukumPageRoutingModule
  ],
  declarations: [HukumPage]
})
export class HukumPageModule {}
