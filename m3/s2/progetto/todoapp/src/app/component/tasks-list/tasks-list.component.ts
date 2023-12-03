import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodosService } from '../../todos.service';
import { iTodos } from '../../Modules/itodos';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {

@Input() tasks: iTodos[] = [];
@Input() loading: boolean = false;
@Input() page!:string;
@Input() savedTask:iTodos|null=null;

@Output() onDeletedTask:EventEmitter<string> = new EventEmitter();
@Output() onUpdatedTask:EventEmitter<iTodos> = new EventEmitter();
@Output() onTaskOperating: EventEmitter<string> = new EventEmitter();
@Output() onLoadingOperation: EventEmitter<boolean> = new EventEmitter();

loadingOperation:boolean=false;
pageTodo:boolean=false;
pageCompleted:boolean=false;
operationType:string = "";
editing:boolean = false;

editingTask:iTodos ={
  id: "",
  title: "",
  completed: false
}

  constructor(private todoSvc:TodosService) { }

delete(id:string){
  this.loadingOn()
  this.operationType = "Eliminando"
  this.onTaskOperating.emit(this.operationType)
  this.todoSvc.deleteTask(id).then(res=>{
    this.onDeletedTask.emit(id)
    this.loadingOff()
  })
}

complete(task:iTodos){
  this.loadingOn()
  this.operationType = "Completando"
  this.onTaskOperating.emit(this.operationType)
  task.completed = true
  this.todoSvc.updateTask(task).then(res=>{
    this.emitTask(res)
    this.loadingOff()
  })
}

todo(task:iTodos){
  this.loadingOn()
  this.operationType = "Spostando"
  this.onTaskOperating.emit(this.operationType)
  task.completed = false
  this.todoSvc.updateTask(task).then(res=>{
    this.emitTask(res)
    this.loadingOff()
  })
}

editMode(task:iTodos){
  this.editing = true;
  this.editingTask = task;
}

updateTask(task:iTodos){
  this.loadingOn()
  this.operationType = "Modificando"
  this.onTaskOperating.emit(this.operationType)
  this.todoSvc.updateTask(task).then(res=>{
    let index:number = this.tasks.findIndex(t=>t.id == task.id)
    this.tasks[index] = this.editingTask
    this.emitTask(res)
    this.editing = false
    this.loadingOff()
  })
}

ngOnInit(){
  this.checkPage()
}

  checkPage(){
    if (this.page == "ToDo") {
      return this.pageTodo = true;
    }
    return this.pageCompleted = true;
  }

  loadingOn(){
    this.loading=true;
    this.loadingOperation=true;
    this.onLoadingOperation.emit(this.loadingOperation)
  }

  loadingOff(){
    this.loading=false;
    this.loadingOperation=false;
    this.onLoadingOperation.emit(this.loadingOperation)
  }

  returnPageClass ():{}{
    return {
      'todotitle': this.pageTodo,
      'completedtitle': this.pageCompleted
    }
  }

  emitTask (task:iTodos){
    this.savedTask=task
    this.onUpdatedTask.emit(this.savedTask)
  }




}
