import { Component,OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';
import {ActivatedRoute} from'@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  heroes:any[]=[];
  termino:string;
  constructor( private ActivatedRoute:ActivatedRoute,
               private hS:HeroesService

  ) { }
  ngOnInit(){
    this.ActivatedRoute.params.subscribe(params =>{
      console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this.hS.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
  }


}
