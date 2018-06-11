import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import {Router} from'@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any={};
  @Input() i:number;
  @Output() hereoSeleccionado:EventEmitter<number>;

  constructor( private router:Router){
    this.hereoSeleccionado = new EventEmitter();
}
  ngOnInit() {
  }

  verHeroe(indice:number){
    this.router.navigate(['/heroe',this.i]);
    // this.hereoSeleccionado.emit(this.i);
  }

}
