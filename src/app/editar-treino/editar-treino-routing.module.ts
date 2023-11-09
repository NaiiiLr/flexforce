import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarTreinoPage } from './editar-treino.page';

const routes: Routes = [
  {
    path: '',
    component: EditarTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarTreinoPageRoutingModule {}
