import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CityService } from 'src/app/_service/city.service';
import { CountryService } from 'src/app/_service/country.service';
import { City } from './../../_model/city';

@Component({
  selector: 'app-city-listing',
  templateUrl: './city-listing.component.html',
  styleUrls: ['./city-listing.component.scss']
})
export class CityListingComponent implements OnInit {
  countryName;
  countryId;
  cities:City[];


  constructor(private cityService: CityService,private route:ActivatedRoute,private countryService:CountryService, private router:Router) { }

  ngOnInit(): void {
    this.countryId= this.route.snapshot.params['id'];
    this.countryService.getCountryById(this.countryId).subscribe(
      (res) => {this.countryName=res.name;}
    );

    this.cityService.getAllCitiesInCountry(this.countryId).subscribe(
      (res) => {this.cities = [...res];}
    );
  }

  onEditCity(id:number){
    this.router.navigate(['/editCity',id]);
  }

  onDeleteCity(id:number){
    this.cityService.deleteCity(id).subscribe(
      (res)=>{
        this.cities=this.cities.filter((el)=>el.id != id)
      }
    );
  }
  onAddCity(){
    this.router.navigate(['/addCity',this.countryId])
  }

}
