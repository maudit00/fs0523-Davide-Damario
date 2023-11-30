import { Component } from '@angular/core';
import { IPost } from '../../i-post';
import { PostService } from '../../post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infopost',
  templateUrl: './infopost.component.html',
  styleUrl: './infopost.component.scss'
})
export class InfopostComponent {
post!:IPost;
loading:boolean = false;

constructor(private postService: PostService, public route: ActivatedRoute) { }

ngOnInit () {
  this.route.params.subscribe(params => {
    this.loading = true
    console.log(params['id']);
    this.postService.getPostById(params['id']).then(post => {
      this.post = post
      this.loading = false;
    });
  });
  }
}
