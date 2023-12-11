import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { IUser } from '../../../Models/i-user';
import { Observable, map } from 'rxjs';
import { IAuthData } from '../../../Models/i-auth-data';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
constructor(private authSvc:AuthService) {
this.authSvc.user$.subscribe(user => user ? this.user = user : this.user = null)
}

  user:IAuthData | null = null;

  logout() {
    this.authSvc.logout();
  }
}
