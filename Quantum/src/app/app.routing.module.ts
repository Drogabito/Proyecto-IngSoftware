import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarComponent } from './buscar/buscar.component';
import { Buscar2Component } from './buscar2/buscar2.component';
import { VerComponent } from "./ver/ver.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/buscar2', pathMatch: 'full' },
  { path: 'buscar', component: BuscarComponent },
  { path: 'ver', component: VerComponent },
  { path : 'buscar2', component: Buscar2Component },
  //
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
