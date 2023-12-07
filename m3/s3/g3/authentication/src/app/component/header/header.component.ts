import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../pages/auth/auth.service';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private authService:AuthService, private router:Router) { }


  loginCheck(){
     this.authService.isLoggedin$.subscribe(res => {
      console.log(res);

      return res
    })
  }

  logout(){
    console.log();

   this.authService.logout();
  }

}
