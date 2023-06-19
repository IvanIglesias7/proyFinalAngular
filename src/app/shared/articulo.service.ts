import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Articulo } from './articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  private articulos: Articulo[] = [];
  private articulosSubject: BehaviorSubject<Articulo[]> = new BehaviorSubject<Articulo[]>([]);

  constructor(private firestore: Firestore) { }

  getArticulos(): Observable<Articulo[]> {
    const articuloRef = collection(this.firestore, 'articulos');
    return collectionData(articuloRef, { idField: 'id' }) as Observable<Articulo[]>;
  }

  // Obtener un artículo por ID
  getArticuloById(id: string): Articulo | undefined {
    return this.articulos.find(articulo => articulo.id === id);
  }

  // Agregar un nuevo artículo
  agregarArticulo(articulo: Articulo): void {
    this.articulos.push(articulo);
    this.articulosSubject.next(this.articulos);
  }

  // Actualizar un artículo existente
  actualizarArticulo(articulo: Articulo): void {
    const index = this.articulos.findIndex(a => a.id === articulo.id);
    if (index !== -1) {
      this.articulos[index] = articulo;
      this.articulosSubject.next(this.articulos);
    }
  }

  // Eliminar un artículo
  eliminarArticulo(id: string): void {
    this.articulos = this.articulos.filter(articulo => articulo.id !== id);
    this.articulosSubject.next(this.articulos);
  }
}
