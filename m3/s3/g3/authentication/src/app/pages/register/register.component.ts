import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { iRegister } from '../../Models/i-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private authSvc:AuthService, private route:Router) { }

  registerData:iRegister = {
    nome: '',
    email: '',
    password: ''
  }

send() {
this.authSvc.signUp(this.registerData).subscribe(data => {
  console.log(data);
  this.route.navigate(['/login']);
})
}

}
