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
const appRoutes:Routes =[
{path:'',component:HomeComponent},
{path:'profil',component:ProfilComponent},
{path:'sklep',component:SklepComponent},
{path:'karnet',component:KarnetComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeHeaderComponent,
    ProfilComponent,
    SklepComponent,
    KarnetComponent,
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
