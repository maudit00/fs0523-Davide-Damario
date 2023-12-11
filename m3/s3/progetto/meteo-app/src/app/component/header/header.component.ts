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
constructor(private authSvc:AuthService, private route:Router) { }

city:string=""
logged:boolean=false;
lang:string="it"
limit:string="5"
rippleColor:string="rgb(255, 255, 255, 0.3)"


isLogged () {
this.authSvc.isLogged$.subscribe(res =>this.logged=res)
return this.logged
}

logout () {
  this.authSvc.logout()
}

}
