import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { iAccessData } from '../../Models/i-access-data';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { iRegister } from '../../Models/i-register';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient, private route:Router) {
    this.restoreUser()
  }

registerUrl:string = `${environment.apiUrl}/register`;
loginUrl:string = `${environment.apiUrl}/login`;
authSubject = new BehaviorSubject<iAccessData | null>(null);
jwtH:JwtHelperService = new JwtHelperService();

user$= this.authSubject.asObservable();
isLoggedin$= this.user$.pipe(map(user=>!!user));



signUp(data:iRegister):Observable<iAccessData>{
  return this.http.post<iAccessData>(this.registerUrl, data)
}


login(data:iAccessData):Observable<iAccessData> {
  return this.http.post<iAccessData>(this.loginUrl,data)
  .pipe(tap(res => {
    this.authSubject.next(res);
    localStorage.setItem('authData', JSON.stringify(res));
    this.autoLogOut(res.accessToken);
  }))
}

autoLogOut (jwt:string){
  const expDate = this.jwtH.getTokenExpirationDate(jwt) as Date;
  console.log(expDate, jwt)
  const expMs = expDate.getTime() - new Date().getTime();

  setTimeout(() => {
    this.logout();
  }, expMs);
}

logout(){
  this.authSubject.next(null);
  localStorage.removeItem('authData');
  this.route.navigate(['/auth/login']);
}

restoreUser(){
  const userJson = localStorage.getItem('authData');
  if(!userJson) return

  const authData:iAccessData = JSON.parse(userJson);
  if (this.jwtH.isTokenExpired(authData.accessToken)) return

  this.authSubject.next(authData);
}



}


