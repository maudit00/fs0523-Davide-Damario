import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { HeaderComponent } from './component/header/header.component';
import { Page404Component } from './pages/page404/page404.component';
import { FormsModule } from '@angular/forms';
import { TaskComponent } from './component/task/task.component';
import { LoadingTaskComponent } from './component/loading-task/loading-task.component';
import { EmptyTasksComponent } from './component/empty-tasks/empty-tasks.component';
import { TasksListComponent } from './component/tasks-list/tasks-list.component';
import { TaskoperationComponent } from './component/taskoperation/taskoperation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodoComponent,
    CompletedComponent,
    HeaderComponent,
    Page404Component,
    TaskComponent,
    LoadingTaskComponent,
    EmptyTasksComponent,
    TasksListComponent,
    TaskoperationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
