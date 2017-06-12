import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {UserPostsService} from './../Services/user-posts.service';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditpostComponent } from './editpost/editpost.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreatePostComponent,
    EditpostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'home',component: PostsComponent},
      {path: 'post/:id', component: EditpostComponent},
      {path: 'create', component:CreatePostComponent},
      {path:'', redirectTo:'home', pathMatch:'full'}
    ])
  ],
  providers: [UserPostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
