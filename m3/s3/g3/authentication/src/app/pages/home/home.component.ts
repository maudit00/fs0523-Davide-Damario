import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
constructor(private authService:AuthService, private router:Router) { }

userName:string='';

ngOnInit(){
  this.authService.user$.subscribe(user=>{
    if(user){
      console.log(user.user.nome);

      this.userName = user.user.nome;
    }
  })
}
}
