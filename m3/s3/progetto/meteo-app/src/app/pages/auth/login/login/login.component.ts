import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { ILogin } from '../../../../Models/i-login';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authSvc: AuthService, private route: Router) {}

  @ViewChild ('f', { static: true })

  form!:NgForm;
  regex: RegExp = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

  login() {
    this.authSvc.login(this.form.value).subscribe((res) => {
      this.route.navigate(['/home']);
    });
  }

  isEmail(input: NgModel): boolean {
    return this.regex.test(input.value);
  }
}
