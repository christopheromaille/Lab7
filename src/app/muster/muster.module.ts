import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusterPageRoutingModule } from './muster-routing.module';

import { MusterPage } from './muster.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusterPageRoutingModule
  ],
  declarations: [MusterPage]
})
export class MusterPageModule {}
