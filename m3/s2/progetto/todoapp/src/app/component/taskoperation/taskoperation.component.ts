import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-taskoperation',
  templateUrl: './taskoperation.component.html',
  styleUrl: './taskoperation.component.scss'
})
export class TaskoperationComponent {
@Input () loading:boolean = false;
@Input () operation:string = "";

}
