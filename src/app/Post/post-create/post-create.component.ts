import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Postprop} from "../model/postprop";
import {NgForm} from "@angular/forms";
import {PostSerService} from "../../service/post-ser.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';

  constructor(public postserv:PostSerService) { }

  ngOnInit() {
  }

  OnaddPost(postForm: NgForm) {
    if (postForm.invalid) {
      return;
    }
    this.postserv.addPost(postForm.value.title,postForm.value.content);
    postForm.resetForm();
  }

}
