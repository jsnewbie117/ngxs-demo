import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { switchMap } from 'rxjs/internal/operators';
import { DeletePost } from '../_state/posts/posts.actions';
import { Post } from '../_state/posts/posts.model';
import { PostsService } from '../_state/posts/posts.service';

@Component( {
  selector : 'app-post-detail',
  templateUrl : './post-detail.component.html',
  styleUrls : [ './post-detail.component.scss' ]
} )
export class PostDetailComponent implements OnInit {

  post : Post;

  constructor( private route : ActivatedRoute,
               private postsService : PostsService,
               private store : Store,
               private router : Router ) {
  }

  ngOnInit() {

    this.route.paramMap
      .pipe( switchMap( ( params : ParamMap ) => this.postsService.getPost( +params.get( 'id' ) ) ) )
      .subscribe( ( post : Post ) => {
        this.post = post;
      } );

  }

  deletePost() {
    this.store.dispatch( new DeletePost( this.post.id ) );
    this.router.navigate( [ 'posts' ] );
  }

}
