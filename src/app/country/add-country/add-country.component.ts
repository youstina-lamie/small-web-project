import { Component, OnInit, ViewChild } from '@angular/core';
import { Country } from 'src/app/_model/country';
import { CountryService } from './../../_service/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
  @ViewChild('input') inputFeild;
  country: Country = { name: '' };
  constructor(private countryService:CountryService) { }

  ngOnInit(): void {
  }
  onAddCountry(inputValue){
    this.country['name']=inputValue;
    this.countryService.addCountry(this.country).subscribe((res)=>{
      alert(`Country Added ===> "${res.name}"`);
      this.inputFeild.nativeElement.value = ''
    });
    
  }

}
