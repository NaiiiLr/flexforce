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
  public nome_personal:string = '';
  public senha_personal:string = '';
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
            this.nome_personal = _dados.nome_personal;
            this.senha_personal = _dados.login_personal;
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
    fd.append('nome_personal', this.nome_personal);
    fd.append('senha_personal', this.senha_personal);

    this.requisicao_service
    .post(fd)
    .subscribe(
      async () => {
        await loading.dismiss();
      }
    )
  }

}
