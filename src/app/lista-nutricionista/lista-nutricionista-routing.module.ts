import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaNutricionistaPage } from './lista-nutricionista.page';

const routes: Routes = [
  {
    path: '',
    component: ListaNutricionistaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaNutricionistaPageRoutingModule {}
