import { Component, ViewChild } from '@angular/core';
import { IRegister } from '../../../../Models/i-register';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
constructor(private authSvc:AuthService) { }
@ViewChild ('f', {static: true})

form!:NgForm
confirmPassword:string = ""
emailRegEx:string = "[a-z]{2,15}@[a-z]{2,15}.[a-z]{2,7}"

isEmail(input:NgModel){
  if(input.errors){
    return input?.errors['pattern'] && input.dirty
  }
  return false;
}

//   send() {
//     this.authSvc.register(this.form.value).subscribe(res => {
// }
}
