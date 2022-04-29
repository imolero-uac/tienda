import { Injectable } from '@angular/core';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private miCarrito: Producto[] = [];

  constructor() { }

  agregarProducto(producto: Producto): void {
    this.miCarrito.push(producto);
  }

  calcularValor(): number {
    return this.miCarrito.reduce((valor, item) => {return valor + item.precio;}, 0);
  }

  getMiCarrito(): Producto[] {
    return this.miCarrito;
  }
}
