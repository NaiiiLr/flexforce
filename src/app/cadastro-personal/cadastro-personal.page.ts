import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-personal',
  templateUrl: './cadastro-personal.page.html',
  styleUrls: ['./cadastro-personal.page.scss'],
})
export class CadastroPersonalPage implements OnInit {

  public id:number = 0;
  public nomePersonal:string = '';
  public senhaPersonal:string = '';
  public confirmeSenhaPersonal:string = '';

  constructor(
    public requisicao_service:RequisicaoService,
    private loadingController: LoadingController,
    private activated_router: ActivatedRoute,
  ) { 
    this.activated_router.params
    .subscribe(
      (params:any) => {
        this.id = params.id == undefined ? 0 :params.id;
        this.requisicao_service.get({
          controller:'personal-get',
          id:this.id
        })
        .subscribe(
          (_dados:any) => {
            this.nomePersonal = _dados.nome_personal;
            this.senhaPersonal = _dados.login_personal;
          }
        )
      }
    )
  }

  ngOnInit() {
  }

  async salvar(){
    const loading = await this.loadingController.create({
      message: 'Salvando...',
    });

    await loading.present();

    const fd = new FormData();
    fd.append('controller','personal');
    fd.append('id', String(this.id));
    fd.append('nome', this.nomePersonal);
    fd.append('senha', this.senhaPersonal);

    this.requisicao_service
    .post(fd)
    .subscribe(
      async () => {
        await loading.dismiss();
      }
    )
  }

}
