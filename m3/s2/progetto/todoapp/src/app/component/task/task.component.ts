import { Component, Input } from '@angular/core';
import { iTodos } from '../../Modules/itodos';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
@Input () task!:iTodos;
}
