import { CvFabricioComponent } from './components/utilidades/cv-fabricio/cv-fabricio.component';
import { RouterModule, Routes } from "@angular/router";
import { AutorComponent } from "./components/utilidades/autor/autor.component";
import { CaruselComponent } from "./components/utilidades/carusel/carusel.component";
import { HeroesComponent } from "./components/utilidades/heroes/heroes.component";
import { HomeComponent } from "./components/utilidades/home/home.component";
import { SobrenComponent } from "./components/utilidades/sobren/sobren.component";

const APP_ROUTES: Routes=[
{path : 'home', component:HomeComponent},
{path : 'heroes', component:HeroesComponent},
{path : 'sobren', component:SobrenComponent},
{path : 'autor', component:AutorComponent},
{path : 'carusel', component:CaruselComponent},
{path : 'cv-fabricio', component:CvFabricioComponent},
{path : '**', pathMatch:'full', redirectTo:'home'},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
