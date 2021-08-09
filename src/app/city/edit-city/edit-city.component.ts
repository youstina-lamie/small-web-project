import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/_model/city';
import { CityService } from 'src/app/_service/city.service';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {
  city: City={name:'',countryId:24} ;


  constructor(private cityService:CityService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.city.id=+this.route.snapshot.params['cityId'];
    this.cityService.getCityById(this.city.id).subscribe(
      (res)=>{
        this.city.name=res.name;
        this.city.countryId=res.countryId;
      }
    )
  }

 
  onEditCity(){
    console.log(this.city,'countryyyy')
    this.cityService.updateCity(this.city).subscribe(
      (res)=>{this.router.navigate(['/city',this.city.countryId])}
    )

  }

}
