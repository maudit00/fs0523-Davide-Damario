import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { iAccessData } from '../../Models/i-access-data';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { iRegister } from '../../Models/i-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http:HttpClient, private route:Router) { }

registerUrl:string = `${environment.apiUrl}/register`;
loginUrl:string = `${environment.apiUrl}/login`;
authSubject = new BehaviorSubject<iAccessData | null>(null);

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
  }))
}




}


