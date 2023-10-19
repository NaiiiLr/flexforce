import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TreinosPageRoutingModule } from './treinos-routing.module';

import { TreinosPage } from './treinos.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TreinosPageRoutingModule,
    SharedModule,
  ],
  declarations: [TreinosPage]
})
export class TreinosPageModule {}
