import { iTodos } from '../../Modules/itodos';
import { TodosService } from './../../todos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
todoArr:iTodos[]=[]
loadingTasks:boolean=false;
loadingOperation:boolean=false;
savedTask:iTodos|null=null;
page:string = "ToDo"
newTask:Partial<iTodos>={
title:'',
completed:false
}

  constructor(private todoSvc:TodosService){}


addTask(){
  this.loadingOperation=true;
  this.todoSvc.addTask(this.newTask).then(res=>{
    this.todoArr.push(res)
    this.savedTask=res;
    this.newTask={
      title:'',
      completed:false
    }
  })
  }

ngOnInit(){
  this.loadingTasks = true;
  this.todoSvc.getTasks().then(tasks => {
    this.todoArr = tasks.filter(t=>!t.completed)
    this.loadingTasks = false;
  });
}

}

