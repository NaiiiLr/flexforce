import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.page.html',
  styleUrls: ['./usuario-listar.page.scss'],
})
export class UsuarioListarPage implements OnInit {

  constructor(
    public requisicao_service:RequisicaoService,
  ) { }
  
  public usuarios:Array<any> = [];
  ngOnInit() {
    this.listar();
  }

  listar(){
    this.requisicao_service.get({
      controller:'usuario-listar'
    })
    .subscribe(
      (_res:any) => {
        this.usuarios = _res;
      }
    );

    }
    
  }
