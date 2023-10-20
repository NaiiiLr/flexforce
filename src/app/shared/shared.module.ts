import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFooterComponent } from '../my-footer/my-footer.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonicModule } from '@ionic/angular';
import { ChildComponent } from '../child/child.component';
import { NotificacaoComponent } from '../notificacao/notificacao.component';



@NgModule({
  declarations: [
    MyFooterComponent,
    MyHeaderComponent,
    ChildComponent,
    NotificacaoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MyFooterComponent,
    MyHeaderComponent,
    ChildComponent,
    NotificacaoComponent
  ]
})
export class SharedModule { }
