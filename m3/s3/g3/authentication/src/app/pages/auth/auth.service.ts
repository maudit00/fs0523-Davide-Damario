import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { iAccessData } from '../../Models/i-access-data';
import { Observable, tap } from 'rxjs';
import { iRegister } from '../../Models/i-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient, private route:Router) { }

registerUrl:string = `${environment.apiUrl}/register`;
loginUrl:string = `${environment.apiUrl}/login`;


signUp(data:iRegister):Observable<iAccessData>{
  return this.http.post<iAccessData>(this.registerUrl,data)
  .pipe(tap(data => {
    localStorage.setItem('authData', JSON.stringify(data));
  }))
}

login(data:iAccessData):Observable<iAccessData> {
  return this.http.post<iAccessData>(this.loginUrl,data);
}


}


