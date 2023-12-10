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
coordArr:Coord[]=[];

filteropened:boolean=false;

constructor(private meteo:MeteoService){}

search(){
  this.meteo.cityName=this.input
  this.cityArr=[]
  this.meteo.getCoord(this.input, this.limit).subscribe(res => {
    console.log(res);

    res.forEach(city => {
    this.coord.lat=String(city.lat);
    this.coord.lon=String(city.lon);
    console.log(this.coord);
    this.meteo.getActual(this.coord, this.lang, this.units).subscribe(res => {
      this.cityArr.push(res)
      console.log(this.cityArr)
    })
    })
  })
}
}
