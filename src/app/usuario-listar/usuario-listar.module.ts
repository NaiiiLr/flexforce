import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioListarPageRoutingModule } from './usuario-listar-routing.module';

import { UsuarioListarPage } from './usuario-listar.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioListarPageRoutingModule,
    SharedModule,
  ],
  declarations: [UsuarioListarPage]
})
export class UsuarioListarPageModule {}
