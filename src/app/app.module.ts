import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeHeaderComponent,

=======
>>>>>>> d157778c259e864a04ab816495230825d109f625
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
