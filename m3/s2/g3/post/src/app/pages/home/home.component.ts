import { Component, OnInit } from '@angular/core';
import { PostService } from '../../post.service';
import { IPost } from '../../i-post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  posts:IPost[]= [];
  constructor(private postService: PostService) {
}
  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.posts.forEach(post => {
      post.bgClass = this.postService.getPostColor(post);
    })
  }


}
