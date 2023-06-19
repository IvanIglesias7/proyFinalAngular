import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/shared/articulo';
import { ArticuloService } from 'src/app/shared/articulo.service';
import { UsuarioService } from 'src/app/shared/usuario.service';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  articulos: Articulo[] = [];

  constructor(
    private articuloService: ArticuloService,
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getArticulos();
  }

  getArticulos(): void {
    this.articuloService.getArticulos().subscribe((data) => {
      this.articulos = data;
    });
  }

  cerrarSesion(): void {
    this.usuarioService.logout()
      .then(() => {
        // Redirigir a la página de inicio de sesión
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
