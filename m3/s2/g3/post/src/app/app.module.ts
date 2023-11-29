import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PostAttiviComponent } from './pages/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './pages/post-inattivi/post-inattivi.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavUlComponent } from './component/header/nav-ul/nav-ul.component';
import { ButtonsWrapperComponent } from './component/header/buttons-wrapper/buttons-wrapper.component';
import { PostCardComponent } from './component/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    HeaderComponent,
    FooterComponent,
    NavUlComponent,
    ButtonsWrapperComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
