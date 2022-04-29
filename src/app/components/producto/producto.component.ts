import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: [
  ]
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto = {
    id: '',
    nombre: "",
    imagen: "",
    precio: 0.00
  }
  @Output() productoAgregado = new EventEmitter<Producto>();

  constructor() { }

  ngOnInit(): void {
  }

  onAgregarCarrito(): void {
    this.productoAgregado.emit(this.producto);
  }

}
