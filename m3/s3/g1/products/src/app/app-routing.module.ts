import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { CartComponent } from './pages/cart/cart.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'browse',
    component: BrowseComponent,
    children:[
    {
      path:'',
      component: ProductListComponent
    },
    {
      path:'product/:id',
      component: ProductPageComponent
    },
    {
      path:'favorites',
      component: FavoritesComponent
    },
    {
      path:'cart',
      component: CartComponent
    }
    ]
  },
  {
    path: '**',
    component: Page404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
