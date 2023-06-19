import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosAdminRoutingModule } from './articulos-admin-routing.module';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';
import { AddArticulosComponent } from './add-articulos/add-articulos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListaArticulosComponent,
    AddArticulosComponent
  ],
  imports: [
    CommonModule,
    ArticulosAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ArticulosAdminModule { }
