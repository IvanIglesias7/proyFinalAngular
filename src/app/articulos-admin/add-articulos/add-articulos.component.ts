import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticuloService } from 'src/app/shared/articulo.service';

@Component({
  selector: 'app-add-articulos',
  templateUrl: './add-articulos.component.html',
  styleUrls: ['./add-articulos.component.css']
})
export class AddArticulosComponent implements OnInit {
  formularioArticulo: FormGroup = new FormGroup({
    titulo: new FormControl(),
    descripcion: new FormControl()
  });

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
  }

  agregarArticulo(): void {
    const nuevoArticulo = {
      titulo: this.formularioArticulo.value.titulo,
      descripcion: this.formularioArticulo.value.descripcion
    };

    this.articuloService.agregarArticulo(nuevoArticulo);

    // Reiniciar el formulario
    this.formularioArticulo.reset();
  }
}
