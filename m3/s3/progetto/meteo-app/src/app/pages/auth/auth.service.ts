import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { IAuthData } from '../../Models/i-auth-data';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private route:Router) { }


  registerUrl:string = `${environment.userUrl}/register`;
  loginUrl:string = `${environment.userUrl}/login`;
  authSub = new BehaviorSubject<IAuthData | null>(null);
  jwtH:jwtHelperService = new jwtHelperService();

}
