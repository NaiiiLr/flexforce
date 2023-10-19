import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFooterComponent } from '../my-footer/my-footer.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonicModule } from '@ionic/angular';
import { ChildComponent } from '../child/child.component';



@NgModule({
  declarations: [
    MyFooterComponent,
    MyHeaderComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    MyFooterComponent,
    MyHeaderComponent,
    ChildComponent
  ]
})
export class SharedModule { }
