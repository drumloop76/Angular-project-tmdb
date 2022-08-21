import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faFacebook, faFacebookF, faGoogle, faInstagram, faTwitter, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faEllipsisVertical, faMagnifyingGlass, faUser, faStar, faAngleDown, faXmark, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ClickedOutsideDirective } from './shared/directives/clicked-outside.directive';
import { NgbTypeaheadModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ClickedOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbTypeaheadModule,
    SwiperModule,
    NgbCarouselModule,
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
