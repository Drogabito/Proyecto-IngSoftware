/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent implements OnInit {

  constructor( ) { }

  ngOnInit() { }

}
*/

import { Component } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html'
})
export class VerComponent{
  title = 'Curso de Angular 2 - victorroblesweb.es';

  public mostrarTitulo(){
    console.log("click");

   // Usamos jQuery con normalidad
    $(".title").slideToggle();
  }
}
