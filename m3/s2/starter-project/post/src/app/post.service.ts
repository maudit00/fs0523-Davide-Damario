import { Injectable } from '@angular/core';
import { IPost } from './i-post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: IPost[] = [];
  apiUrl:string = "http://localhost:3000/posts";

  getPosts():Promise<IPost[]>{
  return fetch(this.apiUrl).then(res => res.json())
  }

  getPostsByStatus(status:boolean):Promise<IPost[]>{
  return fetch(`${this.apiUrl}${status}`).then(res => res.json())
  }

  getPostById(id:number):Promise<IPost>{
  return fetch(`${this.apiUrl}/${id}`).then(res => res.json())
  }

}
