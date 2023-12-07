import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { IAuthData } from '../../Models/i-auth-data';
import { BehaviorSubject, map } from 'rxjs';
import { IUser } from '../../Models/i-user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router) { }


  registerUrl:string = `${environment.userUrl}/register`;
  loginUrl:string = `${environment.userUrl}/login`;
  authSub = new BehaviorSubject<IAuthData | null>(null);

  user$ = this.authSub.asObservable();
  isLogged = this.user$.pipe(map(user =>!!user));


  register(user:IUser){
    return this.http.post<IAuthData>(this.registerUrl, user);
  }


}
