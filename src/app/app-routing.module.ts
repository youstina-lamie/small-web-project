import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { CountryListingComponent } from './country/country-listing/country-listing.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { AuthGuardService } from './_service/auth-guard.service';
import { CityListingComponent } from './city/city-listing/city-listing.component';
import { AddCityComponent } from './city/add-city/add-city.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';



const routes: Routes = [
  
  { path: 'login', component: LoginComponent },

  { path: 'countries',canActivate:[AuthGuardService], component: CountryListingComponent },
  { path: 'addCountry',canActivate:[AuthGuardService], component: AddCountryComponent },
  { path: 'editCountry/:countryId',canActivate:[AuthGuardService], component: EditCountryComponent },

  { path: 'addCity/:countryId',canActivate:[AuthGuardService], component: AddCityComponent },
  { path: 'city/:id',canActivate:[AuthGuardService], component: CityListingComponent },
  { path: 'editCity/:cityId',canActivate:[AuthGuardService], component: EditCityComponent },

  


  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
