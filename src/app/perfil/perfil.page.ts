import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public alertButtons = [
    {
      text: 'Não',
      role: 'cancel'
    },
    {
      text: 'Sim',
      role: 'confirm'
    }
  ]

}
