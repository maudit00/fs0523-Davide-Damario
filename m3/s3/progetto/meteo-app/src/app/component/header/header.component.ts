import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { MeteoService } from '../../meteo.service';
import { AuthService } from '../../pages/auth/auth.service';
import { Coord } from '../../Models/i-geo';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isMenuCollapsed:boolean=true;
constructor(private meteoSvc:MeteoService, private authSvc:AuthService, private route:Router) { }

city:string=""
logged:boolean=false;
lang:string="it"
limit:string="5"
rippleColor:string="rgb(255, 255, 255, 0.3)"

coord:Coord={
  lat:0,
  lon:0
}


ngOnInit() {
this.pushCity()
}

pushCity(){
  this.meteoSvc.cityName=this.city;
}

searchByCity(){
  this.pushCity()
  return this.meteoSvc.getCoord(this.meteoSvc.cityName, "5").subscribe(res => {
    this.coord.lat=(res[0].lat);
    this.coord.lon=(res[0].lon);
    this.meteoSvc.getActual(this.coord, "it", "metric").subscribe(res => { console.log(res) })
  })
}

isLogged () {
this.authSvc.isLogged$.subscribe(res =>this.logged=res)
return this.logged
}

logout () {
  this.authSvc.logout()
}

}
