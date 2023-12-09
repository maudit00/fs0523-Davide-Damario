import { Component } from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { MeteoService } from '../../meteo.service';
import { AuthService } from '../../pages/auth/auth.service';
import { Coord } from '../../Models/i-geo';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isMenuCollapsed:boolean=true;
constructor(private meteoSvc:MeteoService, private authSvc:AuthService) { }

city:string=""
logged:boolean=false;

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
    console.log(res);
    this.coord.lat=String(res[0].lat);
    this.coord.lon=String(res[0].lon);

    console.log(this.coord)
    this.meteoSvc.getActual(this.coord).subscribe(res => { console.log(res) })
  })
}

isLogged () {
  return this.authSvc.isLogged$;
}

}
