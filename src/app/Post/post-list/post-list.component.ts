import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Postprop} from "../model/postprop";
import {PostSerService} from "../../service/post-ser.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  /*Post = [
    {title:"Post 1 ", content:"Post1 content"},
    {title:"Post2", content:"Post2 content"},
    {title:"Post3",content:"Post3 content"}
    ];*/
  Post: Postprop[] = [];
  private postSub : Subscription;
  constructor(public postser: PostSerService) { }

  ngOnInit() {
    this.Post = this.postser.getPost();
    this.postser.getUpdateListener()
      .subscribe((Post:Postprop[]) => {
      this.Post = Post;
      })
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }
}
