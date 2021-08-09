import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/_model/city';
import { CityService } from 'src/app/_service/city.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  @ViewChild('cityInput') inputFeild;
  city: City={name:'',countryId:0} ;

  constructor(private cityService:CityService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.city.countryId=+this.route.snapshot.params['countryId'];
    console.log(this.city.countryId)

  }
  
  onAddCity(inputValue){
    this.city['name']=inputValue;
    this.cityService.addCity(this.city).subscribe((res)=>{
      alert(`City Added ===> "${res.name}"`);
      this.inputFeild.nativeElement.value = ''
    });
    
  }

}
