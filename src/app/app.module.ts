import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faFacebookF, faGoogle, faInstagram, faTwitter, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisVertical, faMagnifyingGlass, faUser, faStar, faAngleDown, faXmark, faPlay } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebook,
      faFacebookF,
      faYoutubeSquare,
      faYoutube,
      faTwitter,
      faInstagram,
      faGoogle,
      faAngleDown,
      faEllipsisVertical,
      faUser,
      faMagnifyingGlass,
      faStar,
      faXmark,
      faPlay
    );
  }
}
