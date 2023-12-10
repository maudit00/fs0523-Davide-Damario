import { Component, Input } from '@angular/core';
import { IFavorites } from '../../../Models/i-favorites';
import { IActualWeather } from '../../../Models/i-actual-weather';
import { environment } from '../../../../environments/environment.development';
import { MeteoService } from '../../../meteo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input () favorites!:IFavorites;
  @Input () city!:IActualWeather;

  iconsUrl:string= `${environment.iconsUrl}`
  constructor(private meteo:MeteoService) { }

  addFavorite(city: IActualWeather) {
    let fav: IFavorites = {
      city: city.name,
      coord: {
        lat: (city.coord.lat),
        lon: (city.coord.lon),
      },
    };
    this.meteo.addFavorite(fav);
    console.log(this.meteo.favArr);
  }

  removeFavorite(city: IActualWeather) {
    let fav: IFavorites = {
      city: city.name,
      coord: {
        lat: (city.coord.lat),
        lon: (city.coord.lon),
      },
    };
    this.meteo.removeFavorite(fav);
    console.log(this.meteo.favArr);
  }

  isFavorite(city: IActualWeather): boolean {
    let fav: IFavorites = {
      city: city.name,
      coord: {
        lat: (city.coord.lat),
        lon: (city.coord.lon),
      },
    };
    return this.meteo.isFavorite(fav);
  }


}
