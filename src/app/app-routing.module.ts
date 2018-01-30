import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LotsComponent } from './lots/lots.component';
import { SelectedLotComponent } from './selected-lot/selected-lot.component';
import { AdminComponent } from './auth/admin/admin.component';
import { UserComponent } from './auth/user/user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AuthentificationComponent } from './auth/authentification/authentification.component';
import { ChangeLotComponent } from './change-lot/change-lot.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'change-lot', component: ChangeLotComponent },
  { path: 'lots', component: LotsComponent },
  { path: 'lots/detail/{lot.id}', component: SelectedLotComponent },
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'authentification/registration', component: RegistrationComponent },
  { path: 'authentification/user', component: UserComponent },
  { path: 'authentification/admin', component: AdminComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
