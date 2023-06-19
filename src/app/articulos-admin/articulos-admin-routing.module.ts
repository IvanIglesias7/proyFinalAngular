import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { AddArticulosComponent } from './add-articulos/add-articulos.component';

const routes: Routes = [
  {path: '', component: ListaArticulosComponent},
  {path: 'addarticulo', component: AddArticulosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticulosAdminRoutingModule { }
