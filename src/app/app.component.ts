import { Component } from '@angular/core';
import { Producto } from './modelo/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgapp: string = "./assets/img/avatar-image.png";
  imgVisible: boolean = true;

  onImgCargado(mensaje: string): void {
    console.log("se escucha el evento en el componente Parent");
    this.imgapp = mensaje;
  }

  cambiaVisible(): void {
    this.imgVisible = !this.imgVisible;
  }

}
