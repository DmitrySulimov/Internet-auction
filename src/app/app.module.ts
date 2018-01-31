import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { ClarityModule } from "@clr/angular";
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AgmCoreModule } from '@agm/core';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
};

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LotsComponent } from './lots/lots.component';
import { SelectedLotComponent } from './selected-lot/selected-lot.component';
import { AdminComponent } from './auth/admin/admin.component';
import { UserComponent } from './auth/user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthentificationComponent } from './auth/authentification/authentification.component';
import { AuthentificationService } from './authentification.service';
import { LotsService } from './lots.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagerService } from './pager.service';
import { UtilityService } from './utility.service';
import { ChangeLotComponent } from './change-lot/change-lot.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ClarityModule.forRoot(),
    SwiperModule,
    AngularFontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD2OgSemEs79WQOq3H4mRfJfbr0FJhTcg0'
    }),
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    ContactsComponent,
    LotsComponent,
    SelectedLotComponent,
    AdminComponent,
    UserComponent,
    HomePageComponent,
    RegistrationComponent,
    AuthentificationComponent,
    SidebarComponent,
    ChangeLotComponent
  ],
  providers: [AuthentificationService, LotsService, {provide: SWIPER_CONFIG, useValue: DEFAULT_SWIPER_CONFIG}, PagerService, UtilityService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
