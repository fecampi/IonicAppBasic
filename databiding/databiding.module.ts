import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatabidingPageRoutingModule } from './databiding-routing.module';

import { DatabidingPage } from './databiding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatabidingPageRoutingModule
  ],
  declarations: [DatabidingPage]
})
export class DatabidingPageModule {}
