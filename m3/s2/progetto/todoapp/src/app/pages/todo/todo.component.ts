import { iTodos } from '../../Modules/itodos';
import { TodosService } from './../../todos.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
todoArr:iTodos[]=[]
loadingTasks:boolean=false;
loadingOperation:boolean=false;
savedTask:iTodos|null=null;

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


delete(id:string){
  this.loadingOperation=true;
  this.todoSvc.deleteTask(id).then(res=>{
    this.todoArr=this.todoArr.filter(t=>t.id != id)
    this.savedTask=res;
    this.loadingOperation=false;
  })
}

complete(task:iTodos){
  this.loadingOperation=true;
  task.completed = true
  this.todoSvc.updateTask(task).then(res=>{
    this.todoArr= this.todoArr.filter(t=>t.id!=task.id)
    this.loadingOperation=false;
  })
}

ngOnInit(){
  this.loadingTasks = true;
  this.todoSvc.getTasks().then(tasks => {
    this.todoArr = tasks
    console.log([tasks, this.todoArr]);
    this.loadingTasks = false;
  });
}
}
function deleteTask(id: any, string: any) {
  throw new Error('Function not implemented.');
}

