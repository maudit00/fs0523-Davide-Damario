import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { iRegister } from '../../../../Models/i-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

constructor(private authService:AuthService, private route:Router) { }

regData:iRegister = {
  nome: '',
  email: '',
  password: ''
}

confirmPassword:string='';

send(){
if (this.comparePassword()){
  console.log(this.regData);
  this.authService.signUp(this.regData).subscribe(res => {
    console.log(res);
    this.route.navigate(['/auth/login']);
  })
} else {alert('Le password non corrispondono')}
}

comparePassword():boolean{
  return this.regData.password === this.confirmPassword;
}
}
