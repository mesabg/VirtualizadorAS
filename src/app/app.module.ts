import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/users/admin/admin-dashboard/admin-dashboard.component';
import { DisenadorDashboardComponent } from './pages/users/disenador/disenador-dashboard/disenador-dashboard.component';
import { ResponsableDashboardComponent } from './pages/users/responsable/responsable-dashboard/responsable-dashboard.component';
import { CoordinadorDashboardComponent } from './pages/users/coordinador/coordinador-dashboard/coordinador-dashboard.component';
import { TecnicoDashboardComponent } from './pages/users/tecnico/tecnico-dashboard/tecnico-dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisenadorListaProgramasComponent } from './pages/users/disenador/disenador-lista-programas/disenador-lista-programas.component';
import { DisenadorCrearProyectoComponent } from './pages/users/disenador/disenador-crear-proyecto/disenador-crear-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    AdminDashboardComponent,
    DisenadorDashboardComponent,
    ResponsableDashboardComponent,
    CoordinadorDashboardComponent,
    TecnicoDashboardComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    DisenadorListaProgramasComponent,
    DisenadorCrearProyectoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
