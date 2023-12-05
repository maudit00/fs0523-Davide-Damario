import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrl: './registrazione.component.scss'
})
export class RegistrazioneComponent {
form!:FormGroup
password: string = '';
constructor(private fb:FormBuilder) {}

ngOnInit (){
  this.form = this.fb.group({
    nome: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
    cognome: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
    username: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
    password: this.fb.control(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    confermaPassword: this.fb.control(null, [Validators.required, this.comparePasswords])
})
}


comparePasswords = (password:FormControl):ValidationErrors | null => {
  password = this.form.get('password')?.value;
  if (password.value === password) {
    return null
  } else {
    return {
      invalid: true,
      message: 'Le password non coincidono'
    }
  }
}

isTouched (field:string){
  return this.form.get(field)?.touched;
}
isValid(field:string){
  console.log(this.form.get(field)?.valid, this.form.get(field)?.touched);
  return this.form.get(field)?.valid
}


}
