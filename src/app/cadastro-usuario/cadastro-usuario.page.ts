import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  public id:number = 0;
  public nome:string = '';
  public senha:string = '';
  public confirmeSenha:string = '';

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
          controller:'usuario-get',
          id:this.id
        })
        .subscribe(
          (_dados:any) => {
            this.nome = _dados.nome;
            this.senha = _dados.login;
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
    fd.append('controller','usuario');
    fd.append('id', String(this.id));
    fd.append('nome', this.nome);
    fd.append('senha', this.senha);

    this.requisicao_service
    .post(fd)
    .subscribe(
      async () => {
        await loading.dismiss();
      }
    )
  }

}
