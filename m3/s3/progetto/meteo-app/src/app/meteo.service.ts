import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { IActualWeather } from './Models/i-actual-weather';
import { Coord, IGeo } from './Models/i-geo';
import { Observable } from 'rxjs/internal/Observable';




@Injectable({
  providedIn: 'root'
})
export class MeteoService {


  limit:string="&limit=5"
  cityName:string=""

  constructor(private http:HttpClient) { }

  london: string = `${environment.actual}lat=51.509865&lon=-0.118092${environment.key}`;
  geoUrl: string = `${environment.geoUrl}${this.cityName}${environment.key}`


  getLondon () {
    return this.http.get<IActualWeather>(this.london);
  }

 getCoord(city:string):Observable<IGeo[]> {
  this.cityName=city;
  return this.http.get<IGeo[]>(`${environment.geoUrl}${city}${environment.key}`);
 }

 getActual(coord:Coord):Observable<IActualWeather> {
  return this.http.get<IActualWeather>(`${environment.actual}lat=${coord.lat}&lon=${coord.lon}${environment.key}`);
 }


}


