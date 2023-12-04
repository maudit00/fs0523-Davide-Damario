import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.scss'
})
export class Page404Component {
@HostListener ('document:keypress', ['$event'])
onKeyPressed(ev:KeyboardEvent){
  if (ev.key){
    location.href = "/";
  }
}
}
