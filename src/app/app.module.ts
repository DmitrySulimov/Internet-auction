import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { ClarityModule } from "@clr/angular";

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
import { FilteredLotsComponent } from './filtered-lots/filtered-lots.component';

import { AuthentificationService } from './authentification.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forRoot(),
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
    FilteredLotsComponent
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
