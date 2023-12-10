import { Component } from '@angular/core';
import { IActualWeather } from '../../../Models/i-actual-weather';
import { Coord } from '../../../Models/i-geo';
import { MeteoService } from '../../../meteo.service';
import { Subject } from 'rxjs';
import { IFavorites } from '../../../Models/i-favorites';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  input: string = '';
  cityArr: IActualWeather[] = [];
  lang: string = 'it';
  limit: string = '5';
  units: string = 'metric';


  coord: Coord = {
    lat: '',
    lon: '',
  };
  coordArr: Coord[] = [];

  filteropened: boolean = false;

  constructor(private meteo: MeteoService) {}

  search() {
    this.meteo.cityName = this.input;
    this.cityArr = [];
    this.meteo.getCoord(this.input, this.limit).subscribe((res) => {
      res.forEach((city) => {
        this.coord.lat = String(city.lat);
        this.coord.lon = String(city.lon);
        this.meteo
          .getActual(this.coord, this.lang, this.units)
          .subscribe((res) => {
            this.cityArr.push(res);
          });
      });
    });
  }

  // addFavorite(city: IActualWeather) {
  //   let fav: IFavorites = {
  //     city: city.name,
  //     coord: {
  //       lat: String(city.coord.lat),
  //       lon: String(city.coord.lon),
  //     },
  //   };
  //   this.meteo.addFavorite(fav);
  //   console.log(this.meteo.favArr);
  // }

  // removeFavorite(city: IActualWeather) {
  //   let fav: IFavorites = {
  //     city: city.name,
  //     coord: {
  //       lat: String(city.coord.lat),
  //       lon: String(city.coord.lon),
  //     },
  //   };
  //   this.meteo.removeFavorite(fav);
  //   console.log(this.meteo.favArr);
  // }

  // isFavorite(city: IActualWeather): boolean {
  //   let fav: IFavorites = {
  //     city: city.name,
  //     coord: {
  //       lat: String(city.coord.lat),
  //       lon: String(city.coord.lon),
  //     },
  //   };
  //   return this.meteo.isFavorite(fav);
  // }

  toggleFilter() {
    this.filteropened = !this.filteropened;
  }
}
