import { Component } from '@angular/core';
import { MeteoService } from '../../meteo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private meteoSvc:MeteoService) { }

  ngOnInit () {
    this.meteoSvc.getLondon().subscribe(data => console.log(data));
  }

}
