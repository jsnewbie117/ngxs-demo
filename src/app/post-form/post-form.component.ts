import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { finalize } from 'rxjs/internal/operators';
import { AddPost } from '../_state/posts/posts.actions';
import { Post } from '../_state/posts/posts.model';

@Component( {
  selector : 'app-post-form',
  templateUrl : './post-form.component.html',
  styleUrls : [ './post-form.component.scss' ]
} )
export class PostFormComponent implements OnInit {

  saving = false;

  constructor( private store : Store, private router : Router ) {
  }

  ngOnInit() {
  }

  addPost( form : NgForm ) {
    if ( form.valid ) {
      this.saving = true;
      this.store.dispatch( new AddPost( <Post>form.value ) ).pipe(
        finalize( () => {
          this.saving = false;
        } )
      ).subscribe();
      this.router.navigate( [ 'posts' ] );
    }
  }

}
