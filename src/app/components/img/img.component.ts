import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styles: [
  ]
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  imagen: string = '';

  @Input('imagen')
  set cambioImagen(nuevaImagen: string) {
    this.imagen = nuevaImagen;
    console.log('se ejecuta el cambio');
  }
  @Input() alt: string = "";
  @Output() imgcargado = new EventEmitter<string>();
  imagendefault: string = "./assets/img/default-image.png";
  // contador: number = 0;
  // contadorFun: number | undefined;

  constructor() { //se ejecuta al inicio, una vez, antes del renderizado, no se usan operaciones asincronas
    console.log("se ha ejecutado el constructor");
    console.log('constructor, valor imagen: ', this.imagen);
  }
  
  ngOnChanges(changes: SimpleChanges): void { //se ejecuta luego del constructor, varias veces por input, antes del renderizado
    console.log('ngOnChanges, valor imagen: ', this.imagen);
    console.log(changes);
  }

  ngOnInit(): void { //se ejecuta antes del renderizado, una sola vez, si se usan operaciones asincronas 
    console.log("se ha ejecutado el método ngOnInit()");
    console.log('ngOnInit, valor imagen: ', this.imagen);
    // this.contadorFun = window.setInterval(() => {
    //   this.contador += 1;
    //   console.log("contador");
    // }, 1000);
  }

  ngAfterViewInit(): void { //se ejecuta luego del renderizado, se puede usar para comunicacion con componentes child
    console.log("se ha ejecutado el método ngAfterViewInit()");
    console.log('ngAfterViewInit, valor imagen: ', this.imagen);
  }

  ngOnDestroy(): void {
    console.log("se ha eliminado el componente ngOnDestroy()");
    // window.clearInterval(this.contadorFun);
  }

  onError(): void {
    this.imagen = this.imagendefault;
  }

  // onLoad(): void {
  //   console.log("imagen cargada desde el child");
  //   this.imgcargado.emit(this.imagen);
  // }
}
