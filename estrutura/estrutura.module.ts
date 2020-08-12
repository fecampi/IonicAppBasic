import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstruturaPageRoutingModule } from './estrutura-routing.module';

import { EstruturaPage } from './estrutura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstruturaPageRoutingModule
  ],
  declarations: [EstruturaPage]
})
export class EstruturaPageModule {}
