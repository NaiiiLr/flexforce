import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarTreinoPageRoutingModule } from './editar-treino-routing.module';

import { EditarTreinoPage } from './editar-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarTreinoPageRoutingModule
  ],
  declarations: [EditarTreinoPage]
})
export class EditarTreinoPageModule {}
