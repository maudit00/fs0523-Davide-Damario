import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { IActualWeather } from './Models/i-actual-weather';
import { Coord, IGeo } from './Models/i-geo';
import { Observable } from 'rxjs/internal/Observable';
import { IFavorites } from './Models/i-favorites';
import { Subject, map } from 'rxjs';
import { IFiveDaysWeather } from './Models/i-five-days-weather';
import { AuthService } from './pages/auth/auth.service';
import { IFavResponse } from './Models/i-fav-response';




@Injectable({
  providedIn: 'root'
})
export class MeteoService {


  limit:string="5"
  cityName:string=""
  favSub = new Subject<IFavResponse>
  city$ = this.favSub.asObservable();
  favRemoveSub = new Subject<IFavResponse>
  cityRemove$ = this.favRemoveSub.asObservable();
  favArr:IFavResponse[]=[];

  coord: Coord = {
    lat: 0,
    lon: 0
  }

  constructor(private http:HttpClient, private authSvc:AuthService) {
    this.restoreFavorite()
    this.authSvc.user$.subscribe(user => {
      if(user) this.id = user.user.id
    })
   }

  london: string = `${environment.actual}lat=51.509865&lon=-0.118092${environment.key}`;
  geoUrl: string = `${environment.geoUrl}${this.cityName}${environment.key}`
  favoritesUrl:string = `${environment.favoriteUrl}`
  id:string = ""

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

 getFiveDays(coord:Coord):Observable<IFiveDaysWeather>{
  return this.http.get<IFiveDaysWeather>(`${environment.fiveday}lat=${coord.lat}&lon=${coord.lon}&lang=it${environment.key}`);
 }

 addFavorite(fav:IFavResponse) {

  return this.http.post<IFavorites>(this.favoritesUrl, fav);
}

removeFavorite(id:string) {
  return this.http.delete<IFavorites>(`${this.favoritesUrl}/${id}`, );
}

getFavorites(){
  return this.http.get<IFavResponse[]>(this.favoritesUrl);
}

isFavorite(city:IFavorites) {
return this.http.get(`${this.favoritesUrl}`).pipe(map(res => console.log(res)))
}


restoreFavorite(){
  const favoritesJson: string | null = localStorage.getItem('favorites');
  if (!favoritesJson) return
  this.favArr = JSON.parse(favoritesJson);
}


}
