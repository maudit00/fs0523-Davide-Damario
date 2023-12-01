import { Component, OnInit } from '@angular/core';
import { iTodos } from '../../Modules/itodos';
import { TodosService } from '../../todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent implements OnInit {
  todoArr:iTodos[]=[];
  loadingTasks:boolean=false;
  page:string="Completed";

  constructor(private todoSvc:TodosService){}


  delete(id:string){
    this.todoArr=this.todoArr.filter(t=>t.id!= id)
  }

  update(task:iTodos){
    this.todoArr=this.todoArr.filter(t=>t.id!=task.id)
  }

  ngOnInit(){
    this.loadingTasks = true;
    this.todoSvc.getTasks().then(tasks => {
      this.todoArr = tasks.filter(t=>t.completed)
      this.loadingTasks = false;
    });
  }

}
