import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'register', component: RegisterComponent},
  
  {path: 'articulos', loadChildren: () => import('src/app/articulos-admin/articulos-admin.module').then(m => m.ArticulosAdminModule), ...canActivate(() => redirectUnauthorizedTo(['/register']))}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
