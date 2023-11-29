import { Injectable } from '@angular/core';
import { IPost } from './i-post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: IPost[] = [
    {
      id: 1,
      title: 'Aliquote IVA',
      content:
        'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      author: 'Mario Rossi',
      date: new Date().toLocaleString(),
      active: true,
      type:"news",
      bgClass:""
    },
    {
      id: 2,
      title: 'Ritiro dal basket di Lebron James',
      content:
        'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      author: 'Bruno Bianchi',
      date: new Date().toLocaleString(),
      active: true,
      type:"politic",
      bgClass:""
    },
    {
      id: 3,
      title: 'Pizze nel mondo dei developer',
      content:
        'Aliquip sunt adipisicing tempor labore nulla in dolor. Ut incididunt ullamco fugiat deserunt veniam veniam non. Labore veniam incididunt laboris velit et reprehenderit ullamco. Sit nulla est deserunt nisi culpa.',
      author: 'Captain Mike',
      date: new Date().toLocaleString(),
      active: true,
      type:"education",
      bgClass:""
    }
  ];

  getPosts(): IPost[] {
  return this.posts;
  }

  getActivePosts():IPost[] {
    return this.posts.filter(post => post.active);
  }
  getInactivePosts():IPost[] {
    return this.posts.filter(post => !post.active);
  }

  getPostColor(post:IPost): string {
    let bg:string = "";
     switch (post.type) {
       case "news":
         bg = "bg-warning";
         break;
       case "politic":
         bg = "bg-dark";
         break;
       case "education":
         bg = "bg-info";
         break;
       default:
         bg = "bg-warning";
         break;
  }
  return bg;
}
}
