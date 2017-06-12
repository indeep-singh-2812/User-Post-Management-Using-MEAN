import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserPostsService} from './../../Services/user-posts.service';
import {UserPost} from './../user-post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userPosts : UserPost[];
  constructor(private userPostsService: UserPostsService,private _router:Router) {
  }

  ngOnInit(){
    this.userPostsService.getUserPosts().subscribe(data => {
        this.userPosts = data;
    });
  }

  deletePost(postId: string){
    this.userPostsService.deleteUserPost(postId).subscribe(data => {
      alert(data);
      this.ngOnInit();
    })
  }
}
