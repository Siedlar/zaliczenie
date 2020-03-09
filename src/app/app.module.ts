import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { SklepComponent } from './sklep/sklep.component';
import { KarnetComponent } from './karnet/karnet.component';
import { SekcjaComponent } from './home/sekcja/sekcja.component';
import { GaleriaComponent } from './home/galeria/galeria.component';
import { TeamComponent } from './home/team/team.component';
import {ExponentialStrengthPipe} from './home/sekcja/shorten.pipe';
import { KontaktComponent } from './home/kontakt/kontakt.component'
const appRoutes:Routes =[
{path:'',component:HomeComponent},
{path:'profil',component:ProfilComponent},
{path:'sklep',component:SklepComponent},
{path:'karnet',component:KarnetComponent}
];
@NgModule({
  declarations: [
    ExponentialStrengthPipe,
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeHeaderComponent,
    ProfilComponent,
    SklepComponent,
    KarnetComponent,
    SekcjaComponent,
    GaleriaComponent,
    TeamComponent,
    KontaktComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
