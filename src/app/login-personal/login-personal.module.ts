import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPersonalPageRoutingModule } from './login-personal-routing.module';

import { LoginPersonalPage } from './login-personal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPersonalPageRoutingModule
  ],
  declarations: [LoginPersonalPage]
})
export class LoginPersonalPageModule {}
