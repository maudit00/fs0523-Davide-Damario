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
    }
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
