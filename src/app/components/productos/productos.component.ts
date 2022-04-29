import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { TiendaService } from 'src/app/servicios/tienda.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [
    {
      id: '1',
      nombre: "Bimbollos",
      imagen: "./assets/img/productos/producto_001.png",
      precio: 7.00
    },
    {
      id: '2',
      nombre: "Pan para hamburguesa",
      imagen: "./assets/img/productos/producto_002.png",
      precio: 5.00
    },
    {
      id: '3',
      nombre: "Pan para hamburguesa con ajonjoli",
      imagen: "./assets/img/productos/producto_003.png",
      precio: 10.00
    },
    {
      id: '1',
      nombre: "Bimbollos",
      imagen: "./assets/img/productos/producto_001.png",
      precio: 7.00
    },
    {
      id: '2',
      nombre: "Pan para hamburguesa",
      imagen: "./assets/img/productos/producto_002.png",
      precio: 5.00
    },
    {
      id: '3',
      nombre: "Pan para hamburguesa con ajonjoli",
      imagen: "./assets/img/productos/producto_003.png",
      precio: 10.00
    }
  ];
  miCarrito: Producto[] = [];
  valorCarrito: number = 0;

  constructor(
    private tiendaService: TiendaService
  ) { 
    this.miCarrito = this.tiendaService.getMiCarrito();
  }

  ngOnInit(): void {
  }

  onAgregarProducto(producto: Producto): void {
    // this.valorCarrito += producto.precio;
    // this.miCarrito.push(producto);
    this.tiendaService.agregarProducto(producto);
    this.valorCarrito = this.tiendaService.calcularValor();
  }

}
