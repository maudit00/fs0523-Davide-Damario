import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { IActualWeather } from './Models/i-actual-weather';
import { Coord, IGeo } from './Models/i-geo';
import { Observable } from 'rxjs/internal/Observable';
import { IFavorites } from './Models/i-favorites';
import { Subject, map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class MeteoService {


  limit:string="5"
  cityName:string=""
  favSub = new Subject<IFavorites>
  city$ = this.favSub.asObservable();

  favArr:IFavorites[]=[];

  constructor(private http:HttpClient) {
    this.restoreFavorite()
   }

  london: string = `${environment.actual}lat=51.509865&lon=-0.118092${environment.key}`;
  geoUrl: string = `${environment.geoUrl}${this.cityName}${environment.key}`


  getLondon () {
    return this.http.get<IActualWeather>(this.london);
  }

 getCoord(city:string, limit:string):Observable<IGeo[]> {
  this.cityName=city;
  return this.http.get<IGeo[]>(`${environment.geoUrl}${city}&limit=${limit}${environment.key}`);
 }

 getActual(coord:Coord, lang:string, units:string):Observable<IActualWeather> {
  return this.http.get<IActualWeather>(`${environment.actual}lat=${coord.lat}&lon=${coord.lon}&lang=${lang}&units=${units}${environment.key}`);
 }

 addFavorite(fav:IFavorites) {
  if(this.isFavorite(fav)) return;
   this.favArr.push(fav);
   this.favSub.next(fav);
   localStorage.setItem('favorites', JSON.stringify(this.favArr));
}

removeFavorite(fav:IFavorites) {
  if(!this.isFavorite(fav)) return;
  this.favArr.splice(this.favArr.indexOf(fav), 1);
  this.favSub.next(fav);
  localStorage.setItem('favorites', JSON.stringify(this.favArr));
}

isFavorite(fav:IFavorites):boolean {
return this.favArr.some((f) => f.city === fav.city && f.coord.lat === fav.coord.lat && f.coord.lon === fav.coord.lon)
}

restoreFavorite(){
  const favoritesJson: string | null = localStorage.getItem('favorites');
  if (!favoritesJson) return
  this.favArr = JSON.parse(favoritesJson);
}


}
