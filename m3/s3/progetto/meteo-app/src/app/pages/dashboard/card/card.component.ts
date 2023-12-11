import { Component, Input } from '@angular/core';
import { IFavorites } from '../../../Models/i-favorites';
import { IActualWeather } from '../../../Models/i-actual-weather';
import { environment } from '../../../../environments/environment.development';
import { MeteoService } from '../../../meteo.service';
import { Router } from '@angular/router';
import { IFavResponse } from '../../../Models/i-fav-response';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() city!: IActualWeather;
  idToRemove:string = "";
  iconsUrl: string = `${environment.iconsUrl}`;
  constructor(private meteo: MeteoService, private route: Router) {}

  add(city: IActualWeather) {
    let clone: any = {
      userdId: this.meteo.id,
      city: city.name,
      coord: city.coord,
    };
    if (this.checkFav(city)) return;
    this.meteo.addFavorite(clone).subscribe((res) => {
      this.meteo.favSub.next(clone)
    })
  }

  remove(city: IActualWeather) {
    let c= this.meteo.favArr.find(fav => fav.city === city.name && fav.coord.lat === city.coord.lat)
    console.log(c)
    if (c) {
    this.meteo.removeFavorite(c.id).subscribe(res => {
      this.meteo.favRemoveSub.next(c as IFavResponse)
    })
    } else {
      return
    }
  }

  checkFav(city: IActualWeather):boolean{
    let c = this.meteo.favArr.find(fav => fav.city === city.name && fav.coord.lat === city.coord.lat)
    if (c){
      return true
    }
    return false
  }


goToInfo(city: IActualWeather) {
  this.meteo.coord = city.coord
  this.route.navigate(['/dashboard/info'])
  }
}
