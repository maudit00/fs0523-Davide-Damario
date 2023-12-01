import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-task',
  templateUrl: './loading-task.component.html',
  styleUrl: './loading-task.component.scss'
})
export class LoadingTaskComponent {
@Input() loading:boolean=false;
}
