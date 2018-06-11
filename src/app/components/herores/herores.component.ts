import { Component, OnInit } from '@angular/core';

import {HeroesService, Heroe} from '../../servicios/heroes.service';
//es como usar un servicio
import {Router} from'@angular/router';

@Component({
  selector: 'app-herores',
  templateUrl: './herores.component.html',

})
export class HeroresComponent implements OnInit {
  heroes:Heroe[]=[];

  constructor( private _heroresService:HeroesService,
                private router:Router
              ) { }

  ngOnInit(){
    this.heroes = this._heroresService.getHerores();
    console.log(this.heroes);
  }

//recive el indice del objeto del hereo y nos pone en la ruta de su indice
//redireccionando a esa pagina
  verHeroe(indice:number){
    this.router.navigate(['/heroe',indice]);


  }

}
