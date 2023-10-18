import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from './autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.page.html',
  styleUrls: ['./autenticacao.page.scss'],
})
export class AutenticacaoPage implements OnInit {
  public nome:string = '';
  public senha:string = '';
  public is_open_error_alert:boolean = false;

  constructor(
    public autenticacao_service:AutenticacaoService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  logar(){
    let nome = this.nome;
    let senha = this.senha;

    this.autenticacao_service
    .logar(nome,senha)
    .subscribe(
      (_res:any) => {
        if (_res.status == 'success'){
          sessionStorage.setItem('user_id',_res.user_id);
          sessionStorage.setItem('user_name',_res.user_name);
          sessionStorage.setItem('token',_res.token);
          this.router.navigateByUrl('/home');
        } else {
          this.is_open_error_alert = true;
        }
      }
    );
  }
}