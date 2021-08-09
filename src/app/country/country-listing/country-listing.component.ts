import { Component, OnInit } from '@angular/core';
import { Country } from './../../_model/country';
import { CountryService } from './../../_service/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-listing',
  templateUrl: './country-listing.component.html',
  styleUrls: ['./country-listing.component.scss']
})
export class CountryListingComponent implements OnInit {
  countries:Country[];

  constructor(private countryService:CountryService,private router:Router) { }

  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe(
      (res) => {
        this.countries = [...res];
      }
    );
  }

  onDeleteCountry(id:number){
    this.countryService.deleteCountry(id).subscribe(
      (res)=>{
        this.countries=this.countries.filter((el)=>el.id != id)
      }
    ); 
  }
  
  onSelectCountry(id:number){
    this.router.navigate(['/city',id]);
  }
  onEditCountry(id:number){
    this.router.navigate(['/editCountry',id]);
  }

}
