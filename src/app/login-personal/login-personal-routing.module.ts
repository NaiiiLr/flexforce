import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPersonalPage } from './login-personal.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPersonalPageRoutingModule {}
