import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';



const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }

];

export class FeatureRoutingModule {}

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
  ], 
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
