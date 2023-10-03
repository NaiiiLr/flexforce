import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {

  public nome:string = '';
  public senha:string = '';
  public confirmeSenha:string = '';

  constructor(
    public requisicao_service:RequisicaoService,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  async salvar(){
    const loading = await this.loadingController.create({
      message: 'Salvando...',
    });

    await loading.present();

    const fd = new FormData();
    fd.append('controller','usuario');
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
