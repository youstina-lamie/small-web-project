import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../_model/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  url = `https://taskfrontendapi.azurewebsites.net/api/country`;
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<any> {
    return this.http.get(this.url);
  }

  addCountry(country: Country): Observable<any> {
    return this.http.post(this.url, country);
  }

  getCountryById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  updateCountry(country: Country): Observable<any> {
    return this.http.put(this.url, country);
  }

  deleteCountry(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
