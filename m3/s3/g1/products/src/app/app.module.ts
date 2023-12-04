import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CartComponent } from './pages/cart/cart.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Page404Component } from './pages/page404/page404.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowseNavComponent } from './component/browse-nav/browse-nav.component';
import { CardComponent } from './component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    CartComponent,
    BrowseComponent,
    ProductListComponent,
    ProductPageComponent,
    Page404Component,
    HeaderComponent,
    BrowseNavComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
