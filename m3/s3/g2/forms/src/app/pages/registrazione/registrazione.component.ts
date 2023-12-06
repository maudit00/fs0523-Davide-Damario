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
    confermaPassword: this.fb.control(null, [Validators.required]),
    // immagineProfilo: this.fb.control(null, [Validators.required]),
    biografia : this.fb.control(null, [Validators.required, Validators.minLength(30)]),
})
}

comparePasswords(passw1:string, passw2:string):boolean{
  if(!(this.form.get(passw1)?.value === this.form.get(passw2)?.value)) return false
return this.form.get(passw1)?.value === this.form.get(passw2)?.value;
}

isTouched (field:string){
  return this.form.get(field)?.touched;
}
isValid(field:string){
  return this.form.get(field)?.valid
}

isValidAndTouched(field:string){
  return !this.isValid(field) && this.isTouched(field)
}
send(){
console.log(this.form.valid);
}


getErrors (fieldname:string){
  return this.form.get(fieldname)?.errors;
}


}
