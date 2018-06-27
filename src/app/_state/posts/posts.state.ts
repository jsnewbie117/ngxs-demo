import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/internal/operators';
import { AddPost, DeletePost, GetAllPosts, GetPost } from './posts.actions';
import { Post } from './posts.model';
import { PostsService } from './posts.service';

@State<Post[]>( {
  name : 'posts',
  defaults : null
} )
export class PostsState {

  constructor( private postsService : PostsService ) {
  }

  @Selector()
  static getPosts( posts : Post[] ) {
    return posts;
  }

  @Action( GetAllPosts )
  getAllPosts( { getState, setState } : StateContext<Post[]> ) {
    return getState() || this.postsService.getPosts().pipe(
      tap( ( posts : Post[] ) => {
        setState( posts );
      } ) );
  }

  @Action( AddPost )
  addPost( { getState, setState } : StateContext<Post[]>, { post } : AddPost ) {
    return this.postsService.addPost( post ).pipe(
      tap( ( result : Post ) => {
        setState( [ ...(getState() || []), result ] );
      } )
    );
  }

  @Action( DeletePost )
  deletePost( { getState, setState } : StateContext<Post[]>, { id } : DeletePost ) {
    return this.postsService.deletePost( id ).pipe(
      tap( () => {
          setState( getState().filter( post => post.id !== id ) );
        }
      )
    );
  }

}
