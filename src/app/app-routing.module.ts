import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2PageTransitionModule } from "ng2-page-transition";

//-- Importing Pages
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [{
	path: '',
	children: [
		{path: '', redirectTo: 'inicio', pathMatch: 'full'},
		{path: 'inicio', component: InicioComponent},
		{path:'**', redirectTo: 'inicio'}
	]
}];

@NgModule({
  imports: [
  	RouterModule.forRoot(routes),
  	Ng2PageTransitionModule
  ],
  exports: [
  	RouterModule,
  	Ng2PageTransitionModule
  ]
})
export class AppRoutingModule { }
