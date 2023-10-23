import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './service/guard.service';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //canActivateChild: [GuardService]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'login-usuario',
    loadChildren: () => import('./login-usuario/login-usuario.module').then( m => m.LoginUsuarioPageModule)
  },
  {
    path: 'tela-inicial',
    loadChildren: () => import('./tela-inicial/tela-inicial.module').then( m => m.TelaInicialPageModule)
  },
  {
    path: 'lista-treino',
    loadChildren: () => import('./lista-treino/lista-treino.module').then( m => m.ListaTreinoPageModule)
  },
  {
    path: 'usuario-listar',
    loadChildren: () => import('./usuario-listar/usuario-listar.module').then( m => m.UsuarioListarPageModule)
  },
  {
    path: 'cadastro-personal',
    loadChildren: () => import('./cadastro-personal/cadastro-personal.module').then( m => m.CadastroPersonalPageModule)
  },
  {
    path: 'login-personal',
    loadChildren: () => import('./login-personal/login-personal.module').then( m => m.LoginPersonalPageModule)
  },
  {
    path: 'treinos',
    loadChildren: () => import('./treinos/treinos.module').then( m => m.TreinosPageModule)
  },
  {
    path: 'autenticacao',
    loadChildren: () => import('./autenticacao/autenticacao.module').then( m => m.AutenticacaoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },  {
    path: 'personal-listar',
    loadChildren: () => import('./personal-listar/personal-listar.module').then( m => m.PersonalListarPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
