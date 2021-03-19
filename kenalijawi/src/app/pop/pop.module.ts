import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopPageRoutingModule } from './pop-routing.module';

import { PopPage } from './pop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopPageRoutingModule
  ],
  declarations: [PopPage]
})
export class PopPageModule {}
