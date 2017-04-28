import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ng2PageTransitionModule } from "ng2-page-transition";

//-- Importing Pages
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/users/admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [{
	path: '',
	children: [
		{path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: HomeComponent},
    {path: 'admin', children:[
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: AdminDashboardComponent}
    ]},
    {path: 'coordinador', component: HomeComponent},
    {path: 'disenador', component: HomeComponent},
    {path: 'responsable', component: HomeComponent},
    {path: 'tecnico', component: HomeComponent},
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
