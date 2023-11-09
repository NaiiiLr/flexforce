import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-treino',
  templateUrl: './editar-treino.page.html',
  styleUrls: ['./editar-treino.page.scss'],
})
export class EditarTreinoPage implements OnInit {
  public userid:number = 0;
  constructor(
    public requisicao_service:RequisicaoService,
    private activated_router: ActivatedRoute,
  ) { 
    this.activated_router.params
    .subscribe(
      (params:any) => {        
        this.userid = params.userid == undefined ? 0 :params.userid;
        console.log("Id do Usuário selecionado => " + this.userid);
        this.requisicao_service.get({
          controller:'treinos',
          id:this.userid
        })
        .subscribe(
          (_dados:any) => {

          }
        )
      }
    )
  }

  ngOnInit() {
  }

}
