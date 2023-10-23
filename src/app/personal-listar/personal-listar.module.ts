import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalListarPageRoutingModule } from './personal-listar-routing.module';

import { PersonalListarPage } from './personal-listar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalListarPageRoutingModule
  ],
  declarations: [PersonalListarPage]
})
export class PersonalListarPageModule {}
