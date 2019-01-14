import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsProfileComponent } from './settings-profile/settings-profile.component';
import { SettingsContactComponent } from './settings-contact/settings-contact.component';

/* 
Specify route url
We can also use Route class array insteat of Routes
Path attribute will be specifying the component path
*/
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'settings', component: SettingsComponent , children: [
      {path: 'profile', component: SettingsProfileComponent},
      {path: 'contact', component: SettingsContactComponent}
  ]},
  {path: '**', component:PageNotFoundComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
