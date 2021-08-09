import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../_model/city';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  url = `https://taskfrontendapi.azurewebsites.net/api/city`;
  constructor(private http: HttpClient) {}

  getAllCities(): Observable<any> {
    return this.http.get(this.url);
  }

  getCityById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  getAllCitiesInCountry(countryId: number): Observable<any> {
    return this.http.get(`${this.url}/getcities/${countryId}`);
  }

  addCity(city: City): Observable<any> {
    return this.http.post(`${this.url}`, city);
  }

  updateCity(city: City): Observable<any> {
    return this.http.put(`${this.url}`, city);
  }

  deleteCity(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
