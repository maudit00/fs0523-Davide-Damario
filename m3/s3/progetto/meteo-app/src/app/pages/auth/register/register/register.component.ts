import { Component, ViewChild } from '@angular/core';
import { IRegister } from '../../../../Models/i-register';
import { NgForm, NgModel } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private authSvc: AuthService, private route: Router) {}
  @ViewChild('f', { static: true })
  form!: NgForm;
  confirmPassword: string = '';

  regex: RegExp = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

  isEmail(input: NgModel): boolean {
    return this.regex.test(input.value);
  }

  send() {
    let user: IRegister = {
      nome: this.form.value.nome,
      cognome: this.form.value.cognome,
      email: this.form.value.email,
      password: this.form.value.password,
    };

    this.authSvc.register(user).subscribe((res) => {
      console.log(res);
      this.form.reset();
      this.route.navigate(['/']);
    });
  }

  comparePasswords(): boolean {
    return this.confirmPassword === this.form.value.password;
  }
}
