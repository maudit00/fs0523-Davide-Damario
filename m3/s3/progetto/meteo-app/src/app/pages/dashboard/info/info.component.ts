
import { Component } from '@angular/core';
import { MeteoService } from '../../../meteo.service';
import { Coord } from '../../../Models/i-geo';
import { IFavorites } from '../../../Models/i-favorites';
import { IActualWeather } from '../../../Models/i-actual-weather';
import { IFiveDaysWeather, List } from '../../../Models/i-five-days-weather';
import { environment } from '../../../../environments/environment.development';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {


iconsUrl:string= `${environment.iconsUrl}`;
city!:IFiveDaysWeather;
days: List[] = []

constructor(private meteo:MeteoService){
this.search(this.meteo.coord)
}

ngOnInit (){
  console.log(this.city)
}

search(coord: Coord){
return this.meteo.getFiveDays(coord).subscribe((res)=> {
  this.city = res
  this.days = res.list
})
}

checkRes (){
  if (this.city.city.name == 'Globe') {
    return false
  }
  return true
}

}
