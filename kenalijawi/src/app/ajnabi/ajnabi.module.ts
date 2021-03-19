import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjnabiPageRoutingModule } from './ajnabi-routing.module';

import { AjnabiPage } from './ajnabi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjnabiPageRoutingModule
  ],
  declarations: [AjnabiPage]
})
export class AjnabiPageModule {}
