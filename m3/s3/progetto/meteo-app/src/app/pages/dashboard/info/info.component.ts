
import { Component } from '@angular/core';
import { MeteoService } from '../../../meteo.service';
import { Coord } from '../../../Models/i-geo';
import { IFavorites } from '../../../Models/i-favorites';
import { IActualWeather } from '../../../Models/i-actual-weather';
import { IFiveDaysWeather } from '../../../Models/i-five-days-weather';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

coord: Coord = {
  lat: 0,
  lon: 0
}

city:IFiveDaysWeather = {} as IFiveDaysWeather;

constructor(private meteo:MeteoService){
  this.meteo.infoSub.subscribe((res:IActualWeather)=>{
    this.coord.lat = res.coord.lat;
    this.coord.lon = res.coord.lon;
    this.search();
  })
}




search(){
return this.meteo.getFiveDays(this.coord).subscribe((res)=>{console.log(res), this.city = res, console.log(this.city)})
}


}
