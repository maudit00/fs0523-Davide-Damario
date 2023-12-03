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
operation:string="";

newTask:Partial<iTodos>={
title:'',
completed:false
}

  constructor(private todoSvc:TodosService){}


addTask(){
  this.loadingOperation=true;
  this.operation="Creando";
  this.todoSvc.addTask(this.newTask).then(res=>{
    this.todoArr.push(res)
    this.savedTask=res;
    this.newTask={
      title:'',
      completed:false
    }
    this.loadingOperation=false;
  })
  }

  define(operation:string){
    this.operation=operation;
  }

  load(status:boolean){
    this.loadingOperation=status;
  }


  delete(id:string){
    this.todoArr=this.todoArr.filter(t=>t.id!= id)
  }

  update(task:iTodos){
    this.todoArr=this.todoArr.filter(t=>t.id!=task.id)
  }

ngOnInit(){
  this.loadingTasks = true;
  this.todoSvc.getTasks().then(tasks => {
    this.todoArr = tasks.filter(t=>!t.completed)
    this.loadingTasks = false;
  });
}

}

