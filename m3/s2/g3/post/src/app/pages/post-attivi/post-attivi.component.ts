import { AfterViewInit, Component, OnInit} from '@angular/core';
import { PostService } from '../../post.service';
import { IPost } from '../../i-post';

@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrl: './post-attivi.component.scss'
})
export class PostAttiviComponent implements OnInit, AfterViewInit {
  posts:IPost[]= [];

  constructor(private postService: PostService) {
}
  ngOnInit() {
    this.posts = this.postService.getActivePosts();
  }

  ngAfterViewInit(): void {
  }

  deactivatePost(post:IPost):void {
    this.deactivatePost(post);
  }

}
