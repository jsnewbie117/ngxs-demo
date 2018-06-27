import { HttpClient } from '@angular/common/http';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/internal/operators';
import { AddPost, DeletePost, GetAllPosts } from './posts.actions';
import { Post } from './posts.model';

@State<Post[]>( {
  name : 'posts',
  defaults : null
} )
export class PostsState {

  private readonly apiUrl = 'http://reduxblog.herokuapp.com/api/posts';
  private apiKey = 'test';

  constructor( private http : HttpClient ) {
  }

  @Selector()
  static getPosts( posts : Post[] ) {
    return posts;
  }

  @Action( GetAllPosts )
  getAllPosts( { getState, setState } : StateContext<Post[]> ) {
    return getState() || this.http.get( this.apiUrl, { params : { key : this.apiKey } } )
      .pipe( tap( ( posts : Post[] ) => {
        setState( posts );
      } ) );
  }

  @Action( AddPost )
  addPost( { getState, setState } : StateContext<Post[]>, { post } : AddPost ) {
    return this.http.post( this.apiUrl, post, { params : { apiKey : this.apiKey } } ).pipe(
      tap( ( result : Post ) => {
        setState( [ ...getState(), result ] );
      } )
    );
  }

  @Action( DeletePost )
  deletePost( { getState, setState } : StateContext<Post[]>, { id } : DeletePost ) {
    return this.http.delete( `${this.apiUrl}/${id}` ).pipe(
      tap( () => {
        setState( getState().filter( post => post.id !== id ) );
      } )
    );
  }

}
