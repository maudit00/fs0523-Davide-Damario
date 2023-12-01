import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { Page404Component } from './pages/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    CompletedComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
