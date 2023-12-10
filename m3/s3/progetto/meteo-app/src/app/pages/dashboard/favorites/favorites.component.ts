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

}

cityArr:IActualWeather[]=[]

ngOnInit (){
  this.meteo.getFavorites().subscribe(res => {
    this.meteo.favArr = res
    this.searchByFav()
  })
  this.meteo.city$.subscribe(city => {
    this.meteo.getFavorites().subscribe(res => {
      this.meteo.favArr = res
      this.addOneFav(city)
      localStorage.setItem('favorites', JSON.stringify(this.meteo.favArr))
    })
  })
  this.meteo.cityRemove$.subscribe(city => {
    this.meteo.getFavorites().subscribe(res => {
      this.meteo.favArr = res
      this.removeOneFav(city)
      localStorage.setItem('favorites', JSON.stringify(this.meteo.favArr))
    })
  })

}

searchByFav() {
this.meteo.favArr.forEach((fav) => {
  this.meteo.getActual(fav.coord, "it", "metric").subscribe((res) => {
    this.cityArr.push(res)
  })
})
}

addOneFav (city:IFavorites) {
  this.meteo.getActual(city.coord, "it", "metric").subscribe((res) => {
    this.cityArr.push(res)
  })
}

removeOneFav (city:IFavorites){
let c =(this.cityArr.find(fav => fav.name === city.city && fav.coord.lat === city.coord.lat))
if (c) {
this.cityArr.splice(this.cityArr.indexOf(c), 1)
}

}
}
