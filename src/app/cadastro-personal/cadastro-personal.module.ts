import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPersonalPageRoutingModule } from './cadastro-personal-routing.module';

import { CadastroPersonalPage } from './cadastro-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPersonalPageRoutingModule
  ],
  declarations: [CadastroPersonalPage]
})
export class CadastroPersonalPageModule {}
