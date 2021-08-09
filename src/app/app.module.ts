import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CountryListingComponent } from './country/country-listing/country-listing.component';
import { AddCountryComponent } from './country/add-country/add-country.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './_service/auth.service';
import { AuthGuardService } from './_service/auth-guard.service';
import { AuthInterceptor } from './_service/auth.interceptor';
import { CityListingComponent } from './city/city-listing/city-listing.component';
import { AddCityComponent } from './city/add-city/add-city.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CountryListingComponent,
    AddCountryComponent,
    CityListingComponent,
    AddCityComponent,
    EditCountryComponent,
    EditCityComponent
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [HttpClientModule,AuthService,AuthGuardService,{provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
