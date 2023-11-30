import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { IPost } from '../../i-post';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrl: './post-attivi.component.scss'
})
export class PostAttiviComponent implements OnInit {
  posts:IPost[]= [];
  constructor(private postService: PostService) {
}
ngOnInit(){
  this.postService
  .getPosts()
  .then(posts =>{
    this.posts = posts.filter(p => p.active)
})


}
}
