import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-listar',
  templateUrl: './personal-listar.page.html',
  styleUrls: ['./personal-listar.page.scss'],
})
export class PersonalListarPage implements OnInit {

  constructor(
    public requisicao_service: RequisicaoService,
    public router: Router,
  ) { }

  public personais: Array<any> = [];
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

  ngOnInit() {
    this.listar();
  }

  editar(id: number) {
    this.router.navigateByUrl('/cadastro-personal/' + id);
  }

  excluir(id: number) {
    this.requisicao_service.get({
      controller: 'personal-excluir',
      id: id
    })
      .subscribe(() => {
        this.listar();
      })
      ;
  }

  listar() {
    this.requisicao_service.get({
      controller: 'personal-listar'
    })
    .subscribe(
      (_res: any) => {
        this.personais = _res;
      }
    );
  }

  setResult(ev:any, id:number){
    if( ev.detail.role == 'confirm'){
      this.excluir(id);
    }
  }
}

