import { Component } from '@angular/core';
import { MeteoService } from '../../../meteo.service';
import { IActualWeather } from '../../../Models/i-actual-weather';
import { IFavorites } from '../../../Models/i-favorites';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

constructor(private meteo:MeteoService) {
  this.searchByFav()
}

cityArr:IActualWeather[]=[]

searchByFav() {
this.meteo.favArr.forEach((fav) => {
  this.meteo.getActual(fav.coord, "it", "metric").subscribe((res) => {
    this.cityArr.push(res)
  })
})
}

addFavorite(city: IActualWeather) {
  let fav: IFavorites = {
    city: city.name,
    coord: {
      lat: String(city.coord.lat),
      lon: String(city.coord.lon),
    },
  };
  this.meteo.addFavorite(fav);
  console.log(this.meteo.favArr);
}

removeFavorite(city: IActualWeather) {
  let fav: IFavorites = {
    city: city.name,
    coord: {
      lat: String(city.coord.lat),
      lon: String(city.coord.lon),
    },
  };
  this.meteo.removeFavorite(fav);
  console.log(this.meteo.favArr);
}

isFavorite(city: IActualWeather): boolean {
  let fav: IFavorites = {
    city: city.name,
    coord: {
      lat: String(city.coord.lat),
      lon: String(city.coord.lon),
    },
  };
  return this.meteo.isFavorite(fav);
}

}
