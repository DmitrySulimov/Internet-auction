import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from "@clr/angular";


import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LotsComponent } from './lots/lots.component';
import { SelectedLotComponent } from './selected-lot/selected-lot.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ContactsComponent,
    LotsComponent,
    SelectedLotComponent,
    AdminComponent,
    UserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
