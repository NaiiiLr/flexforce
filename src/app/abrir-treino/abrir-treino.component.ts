import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-abrir-treino',
  templateUrl: './abrir-treino.component.html',
  styleUrls: ['./abrir-treino.component.scss'],
})
export class AbrirTreinoComponent implements OnInit {
  presentingElement = undefined;
  private canDismissOverride = false;
  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  dismissChange = new EventEmitter<boolean>();

  onDismissChange(canDismiss: boolean) {
    this.canDismissOverride = canDismiss;
  }

  onWillPresent() {
    this.canDismissOverride = false;
  }

  canDismiss = async () => {
    if (this.canDismissOverride) {
      return true;
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Deseja cancelar o treino?',
      buttons: [
        {
          text: 'Sim',
          role: 'confirm',
        },
        {
          text: 'Não',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };
}
