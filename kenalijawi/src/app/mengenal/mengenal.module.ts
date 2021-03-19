import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MengenalPageRoutingModule } from './mengenal-routing.module';

import { MengenalPage } from './mengenal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MengenalPageRoutingModule
  ],
  declarations: [MengenalPage]
})
export class MengenalPageModule {}
