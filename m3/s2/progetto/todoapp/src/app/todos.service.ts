import { Injectable } from '@angular/core';
import { iTodos } from './Modules/itodos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
todoArr:iTodos[]=[];
apiUrl:string = "http://localhost:3000/tasks"
  constructor() { }

  getTasks():Promise<iTodos[]> {
    return fetch(this.apiUrl).then(res => res.json())
  }

  addTask(task:Partial<iTodos>):Promise<iTodos>{
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        "Content-type": 'application/json'
      },
    body:JSON.stringify(task)})
    .then(res => res.json())
  }

  deleteTask(id:string):Promise<iTodos>{
    return fetch((`${this.apiUrl}${id}`), {
      method: 'DELETE',
      headers: {
        "Content-type": 'application/json'
      }})
    .then(res => res.json())
  }

}
