import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroPersonalPage } from './cadastro-personal.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroPersonalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroPersonalPageRoutingModule {}
