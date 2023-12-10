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

coord:Coord={
  lat:'',
  lon:''
}


ngOnInit() {
this.pushCity()
}

pushCity(){
  this.meteoSvc.cityName=this.city;
}

searchByCity(){
  this.pushCity()
  return this.meteoSvc.getCoord(this.meteoSvc.cityName).subscribe(res => {
    this.coord.lat=String(res[0].lat);
    this.coord.lon=String(res[0].lon);
    console.log(this.coord)
    this.meteoSvc.getActual(this.coord, "it", "5", "metric").subscribe(res => { console.log(res) })
  })
}

isLogged () {
this.authSvc.isLogged$.subscribe(res =>{console.log(res);this.logged=res})
return this.logged
}

logout () {
  this.route.navigate(['/auth', 'login']);
  this.authSvc.logout()
}

}
