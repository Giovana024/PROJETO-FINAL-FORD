import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Treinos } from './pages/treinos/treinos';
import { TreinoDetalhe } from './pages/treino-detalhe/treino-detalhe';
import { Planos } from './pages/planos/planos';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'home', component: Home },
  { path: 'treinos', component: Treinos },
  { path: 'treino-detalhe/:id', component: TreinoDetalhe },
  { path: 'planos', component: Planos },
  { path: 'contato', component: Contato },
];