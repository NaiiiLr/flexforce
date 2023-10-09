import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaTreinoPageRoutingModule } from './lista-treino-routing.module';

import { ListaTreinoPage } from './lista-treino.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaTreinoPageRoutingModule,
    SharedModule
  ],
  declarations: [ListaTreinoPage,
  ],
})
export class ListaTreinoPageModule {}
