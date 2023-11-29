import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { IPost } from '../../i-post';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrl: './post-inattivi.component.scss'
})
export class PostInattiviComponent  implements OnInit{
  posts:IPost[]= [];
  constructor(private postService: PostService) {
}
  ngOnInit() {
    this.posts = this.postService.getInactivePosts();
    this.posts.forEach(post => {
      post.bgClass = this.postService.getPostColor(post);
    })
  }

  activatePost(post:IPost):void {
    this.activatePost(post);
  }


}
