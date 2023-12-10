
import { Component } from '@angular/core';
import { MeteoService } from '../../../meteo.service';
import { Coord } from '../../../Models/i-geo';
import { IFavorites } from '../../../Models/i-favorites';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent {

coord: Coord = {
  lat: 0,
  lon: 0
}
constructor(private meteo:MeteoService){
  this.meteo.favSub.subscribe((res:IFavorites)=>{
    this.coord.lat = res.coord.lat;
    this.coord.lon = res.coord.lon;
    console.log(this.coord, res)
    this.search()
  })
}




search(){
return this.meteo.getFiveDays(this.coord).subscribe((res)=>{console.log(res)})
}


}
