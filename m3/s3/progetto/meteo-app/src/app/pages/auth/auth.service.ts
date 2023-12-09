import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { IAuthData } from '../../Models/i-auth-data';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { IRegister } from '../../Models/i-register';
import { ILogin } from '../../Models/i-login';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router) { }


  registerUrl:string = `${environment.userUrl}/register`;
  loginUrl:string = `${environment.userUrl}/login`;
  jwt:JwtHelperService = new JwtHelperService();
  authSub = new BehaviorSubject<IAuthData | null>(null);

  user$ = this.authSub.asObservable();
  isLogged = this.user$.pipe(map(user =>!!user));


  register(user:IRegister):Observable<IAuthData> {
    return this.http.post<IAuthData>(this.registerUrl, user);
  }

  login(data:ILogin):Observable<IAuthData> {
  return this.http.post<IAuthData>(this.loginUrl, data)
  .pipe(tap(data =>{
    this.authSub.next(data);
    localStorage.setItem('token', JSON.stringify(data))
  }
  ));
  }


  autoLogOut (jwtString:string) {
    const expDate = this.jwt.getTokenExpirationDate(jwtString) as Date;
    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(() => {
      this.logout();
    }, expMs);
  }

  logout() {
    this.authSub.next(null);
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }

  restoreSession (){
    const userJson: string | null = localStorage.getItem('token');
    if (!userJson) return
    const authData: IAuthData = JSON.parse(userJson);
    if (this.jwt.isTokenExpired(authData.accessToken)) return

    this.authSub.next(authData);
    this.autoLogOut(authData.accessToken);
  }

  errors(err: any) {
    switch (err.error) {
        case "Email and Password are required":
            return new Error('Email e password obbligatorie');
            break;
        case "Email already exists":
            return new Error('Utente esistente');
            break;
        case 'Email format is invalid':
            return new Error('Email scritta male');
            break;
        case 'Cannot find user':
            return new Error('utente inesistente');
            break;
            default:
        return new Error('Errore');
            break;
    }
  }


}
