import { Component } from '@angular/core';
import { IActualWeather } from '../../../Models/i-actual-weather';
import { Coord } from '../../../Models/i-geo';
import { MeteoService } from '../../../meteo.service';
import { Subject } from 'rxjs';
import { IFavorites } from '../../../Models/i-favorites';
import { Router } from '@angular/router';

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
    lat: 0,
    lon: 0
  };
  coordArr: Coord[] = [];

  filteropened: boolean = false;

  constructor(private meteo: MeteoService, private route:Router) {}

  search() {
    this.meteo.cityName = this.input;
    this.cityArr = [];
    this.meteo.getCoord(this.input, this.limit).subscribe((res) => {
      res.forEach((city) => {
        this.coord.lat = (city.lat);
        this.coord.lon = (city.lon);
        this.meteo
          .getActual(this.coord, this.lang, this.units)
          .subscribe((res) => {
            this.cityArr.push(res);
          });
      });
    });
  }



  toggleFilter() {
    this.filteropened = !this.filteropened;
  }
}
