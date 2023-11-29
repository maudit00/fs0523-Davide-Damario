import { AfterViewInit, Component, ContentChild, ElementRef, Input } from '@angular/core';
import { IPost } from '../../i-post';


@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent implements AfterViewInit{

  @Input () posts: IPost[]= [];
  @ContentChild('attivaBtn') attivaBtn!: ElementRef;



  ngAfterViewInit(){

  }

}
