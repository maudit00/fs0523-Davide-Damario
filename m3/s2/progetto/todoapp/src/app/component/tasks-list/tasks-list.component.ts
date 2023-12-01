import { Component, Input } from '@angular/core';
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

  constructor(private todoSvc:TodosService) { }

delete(id:string){
  this.loading=true;
  this.todoSvc.deleteTask(id).then(res=>{
    this.tasks=this.tasks.filter(t=>t.id != id)
    // this.savedTask=res;
    this.loading=false;
  })
}

complete(task:iTodos){
  this.loading=true;
  task.completed = true
  this.todoSvc.updateTask(task).then(res=>{
    this.tasks= this.tasks.filter(t=>t.id!=task.id)
    this.loading=false;
  })
}
}
