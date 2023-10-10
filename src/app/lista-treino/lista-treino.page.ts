import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lista-treino',
  templateUrl: './lista-treino.page.html',
  styleUrls: ['./lista-treino.page.scss'],
})
export class ListaTreinoPage implements OnInit {

  constructor(
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

}
