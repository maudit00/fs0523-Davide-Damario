import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService:AuthService, private route:Router) { }

  loginData:any = {
    email: 'mario@rossi.it',
    password: 'asdfqwer2'
  }



login() {
  try{  this.authService.login(this.loginData).subscribe(res => {
    console.log(res);
    this.route.navigate(['/home']);
  })
  } catch (error) {
    alert(error);
  }
}

}
