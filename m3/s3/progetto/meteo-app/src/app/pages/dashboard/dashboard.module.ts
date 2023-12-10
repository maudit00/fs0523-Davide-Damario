import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TabgroupComponent } from './tabgroup/tabgroup.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TabgroupComponent,
    SearchComponent,
    ProfileComponent,
    FavoritesComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    CdkDrag
  ]
})
export class DashboardModule { }
