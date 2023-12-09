import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { IActualWeather } from './Models/i-actual-weather';
import { IGeo } from './Models/i-geo';


type Coord = {
  lat:string;
  lon:string;
}

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  coord:Coord={
    lat:'',
    lon:''
  }
  limit:string="&limit=5"
  cityName:string=""
  cityParam:string=`&q=${this.cityName}`

  constructor(private http:HttpClient) { }

  london: string = `${environment.actual}lat=51.509865&lon=-0.118092${environment.key}`;
  geoUrl: string = `${environment.geoUrl}${this.cityName}${environment.key}`


  getLondon () {
    return this.http.get<IActualWeather>(this.london);
  }

 getCoord(city:string):Observable<IGeo> {
  this.
  return this.http.get<IGeo>(this.geoUrl);
 }
}
