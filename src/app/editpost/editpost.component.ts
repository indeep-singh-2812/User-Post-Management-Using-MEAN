import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserPostsService} from './../../Services/user-posts.service';
import {UserPost} from './../user-post';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  name: string ="";
  age: number = 0;
  email: string = "";
  post: string = "";
  website: string = "";
  _id: string = "";
  constructor(private _activatedRoute: ActivatedRoute, private _userPostService: UserPostsService, private _router: Router) { }

  ngOnInit() {
    let postId : string;
    postId = this._activatedRoute.snapshot.params['id'];

    this._userPostService.getUserPost(postId).subscribe(data => {
      this.name = data.name;
      this._id = data._id;
      this.age = data.age;
      this.email = data.email;
      this.post = data.post;
      this.website = data.website;
    });
  }

  edit(){
      this._userPostService.updateUserPost(new UserPost(this.name,this.age,this.email,this.website, this.post),this._id).subscribe(response => {
        alert(response);
        this._router.navigate(['/home']);
      });
  }

}
