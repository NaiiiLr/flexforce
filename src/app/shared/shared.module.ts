import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFooterComponent } from '../my-footer/my-footer.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    MyFooterComponent,
    MyHeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MyFooterComponent,
    MyHeaderComponent,
  ]
})
export class SharedModule { }
