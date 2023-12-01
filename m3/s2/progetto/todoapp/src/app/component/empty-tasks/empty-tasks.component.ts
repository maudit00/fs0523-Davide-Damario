import { Component, Input } from '@angular/core';
import { iTodos } from '../../Modules/itodos';

@Component({
  selector: 'app-empty-tasks',
  templateUrl: './empty-tasks.component.html',
  styleUrl: './empty-tasks.component.scss'
})
export class EmptyTasksComponent {
@Input() tasks: iTodos[] = [];
@Input() loading: boolean = false;
}
