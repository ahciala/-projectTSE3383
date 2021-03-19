import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsasPageRoutingModule } from './asas-routing.module';

import { AsasPage } from './asas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsasPageRoutingModule
  ],
  declarations: [AsasPage]
})
export class AsasPageModule {}
