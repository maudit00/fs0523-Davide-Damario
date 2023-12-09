import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TabgroupComponent } from './tabgroup/tabgroup.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TabgroupComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatTabsModule
  ]
})
export class DashboardModule { }
