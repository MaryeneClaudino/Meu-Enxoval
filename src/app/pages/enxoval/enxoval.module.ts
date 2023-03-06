import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnxovalPageRoutingModule } from './enxoval-routing.module';

import { EnxovalPage } from './enxoval.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnxovalPageRoutingModule
  ],
  declarations: [EnxovalPage]
})
export class EnxovalPageModule {}
