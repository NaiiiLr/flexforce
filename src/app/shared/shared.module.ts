import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFooterComponent } from '../my-footer/my-footer.component';
import { IonicModule } from '@ionic/angular';
import { ChildComponent } from '../child/child.component';
import { NotificacaoComponent } from '../notificacao/notificacao.component';
import { AbrirTreinoComponent } from '../abrir-treino/abrir-treino.component';
import { MyHeaderComponent } from '../my-header/my-header.component';



@NgModule({
  declarations: [
    MyFooterComponent,
    MyHeaderComponent,
    ChildComponent,
    NotificacaoComponent,
    AbrirTreinoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MyFooterComponent,
    MyHeaderComponent,
    ChildComponent,
    NotificacaoComponent,
    AbrirTreinoComponent
  ]
})
export class SharedModule { }
