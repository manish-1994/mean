import { Injectable } from '@angular/core';
import {Postprop} from "../Post/model/postprop";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostSerService {

  private posts : Postprop[] = [];
  private postsUpdated = new Subject<Postprop[]>();
  constructor() {}

  getPost(){
    return this.posts;
  }

  getUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title:string, content:string) {
    const post: Postprop = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

}
