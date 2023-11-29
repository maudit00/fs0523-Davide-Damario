import {Component, Input } from '@angular/core';
import { IPost } from '../../i-post';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent{

  @Input () post!:IPost;


  getObjClass():string {
  if
  }

}
