import { Component } from '@angular/core';
import { IActualWeather } from '../../../Models/i-actual-weather';
import { Coord } from '../../../Models/i-geo';
import { MeteoService } from '../../../meteo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
input:string="";
cityArr:IActualWeather[]=[];
lang:string="it"
limit:string="5"
units:string="metric"
iconsUrl:string="https://openweathermap.org/img/wn/"

coord:Coord={
  lat:'',
  lon:''
}
filteropened:boolean=false;

constructor(private meteo:MeteoService){}

search(){
  this.meteo.cityName=this.input
  this.meteo.getCoord(this.input).subscribe(res => {
    this.coord.lat=String(res[0].lat);
    this.coord.lon=String(res[0].lon);
    this.meteo.getActual(this.coord, this.lang, this.limit, this.units).subscribe(res => {
      this.cityArr=[]
      this.cityArr.push(res)
      console.log(this.cityArr)
    })
  })
}
}
