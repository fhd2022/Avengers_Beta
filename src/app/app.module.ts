import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//servicios

import { HeroesService } from './services/heroes.service';






//RUTAS

import { APP_ROUTING } from './app.routes';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/utilidades/nabvar/nabvar.component';
import { FooterComponent } from './components/utilidades/footer/footer.component';
import { CaruselComponent } from './components/utilidades/carusel/carusel.component';
import { HeroesComponent } from './components/utilidades/heroes/heroes.component';
import { SobrenComponent } from './components/utilidades/sobren/sobren.component';
import { AutorComponent } from './components/utilidades/autor/autor.component';
import { HomeComponent } from './components/utilidades/home/home.component';
import { CvFabricioComponent } from './components/utilidades/cv-fabricio/cv-fabricio.component';





@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    CaruselComponent,
    HeroesComponent,
    SobrenComponent,
    AutorComponent,
    HomeComponent,
    CvFabricioComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
