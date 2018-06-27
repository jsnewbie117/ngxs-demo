import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/internal/operators';
import { DeletePost, GetAllPosts } from '../_state/posts/posts.actions';
import { Post } from '../_state/posts/posts.model';
import { PostsState } from '../_state/posts/posts.state';

@Component( {
  selector : 'app-posts',
  templateUrl : './posts.component.html',
  styleUrls : [ './posts.component.scss' ]
} )
export class PostsComponent implements OnInit {

  @Select( PostsState.getPosts ) posts$ : Observable<Post[]>;

  constructor( private store : Store ) {
  }

  ngOnInit() {
    this.store.dispatch( new GetAllPosts ).pipe(
      switchMap( () => this.posts$ ),
      tap( console.log )
    );
  }

  deletePost( id : number ) {
    this.store.dispatch( new DeletePost( id ) );
  }

}
