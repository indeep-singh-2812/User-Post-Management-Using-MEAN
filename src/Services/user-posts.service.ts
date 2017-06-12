import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {UserPost} from './../app/user-post';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class UserPostsService {

  constructor(private _http: Http) { }

  getUserPosts(): Observable<UserPost[]>{
    return this._http.get('http://localhost:3000/api/posts').map((response : Response) => <UserPost[]>response.json());
  }

  createUserPost(newPost: UserPost): Observable<UserPost>{
    return this._http.post('http://localhost:3000/api/posts',newPost,null).map((response: Response) => <UserPost>response.json());
  }

  getUserPost(postId: string): Observable<UserPost>{
    return this._http.post('http://localhost:3000/api/search',{'postId' : postId}, null).map((response:Response) => <UserPost>response.json());
  }

  updateUserPost(post: UserPost,postId: string): Observable<string> {
    return this._http.put('http://localhost:3000/api/posts',{'post': post, 'postId': postId},null).map((response: Response) => <string>response.json());
  }

  deleteUserPost(postId: string) : Observable<Object>{
    return this._http.delete('http://localhost:3000/api/posts/'+ postId);
  }
}
