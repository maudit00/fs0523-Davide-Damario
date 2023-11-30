import { Component, Input } from '@angular/core';
import { IPost } from '../../i-post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() post!:IPost;

getObjClass(){
  return {
    'bg-warning': this.post.type == 'news',
    'bg-black': this.post.type == 'politic',
    'text-white': this.post.type =='politic',
    'bg-primary': this.post.type =='education'
  }
}
}

