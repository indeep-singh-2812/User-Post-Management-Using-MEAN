import { Component, OnInit } from '@angular/core';
import {UserPost} from './../user-post';
import {Router} from '@angular/router';
import {UserPostsService} from './../../Services/user-posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
name: string;
age: number;
email: string;
website: string;
post: string;

  constructor(private _userPostService: UserPostsService, private _router: Router) { }

  ngOnInit() {
  }

  create(){
    if(!this.name || !this.age || !this.email){
      alert('You Have missed required fields. Name, Age and Email are required to submit this form.');
    } else{
      var post = new UserPost(this.name, this.age, this.email, this.website, this.post);
      this._userPostService.createUserPost(post).subscribe(data => {
        alert('Hi '+ data.name+' ,your post was successfully created!!');

        this._router.navigate(['/home']);
      });
    }
  }

}
