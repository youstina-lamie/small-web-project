import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/_model/country';
import { CountryService } from './../../_service/country.service';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {
  country: Country={name:''} ;
  

  constructor(private route: ActivatedRoute, private countryService: CountryService, private router:Router) { }

  ngOnInit(): void {
    this.country.id=+this.route.snapshot.params['countryId'];
    console.log(this.country.id,'ssss')
    this.countryService.getCountryById(this.country.id).subscribe(
      (res)=>{
        this.country.name=res.name;
      }
    )

  }

 
  onEditCountry(){
    this.countryService.updateCountry(this.country).subscribe(
      (res)=>{this.router.navigate(['/countries'])}
    )

  }

}
