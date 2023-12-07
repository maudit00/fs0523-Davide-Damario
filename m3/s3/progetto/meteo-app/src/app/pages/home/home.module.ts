import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { ContactsComponent } from './contacts/contacts.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbCollapse
  ]
})
export class HomeModule { }
