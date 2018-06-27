import { Post } from './posts.model';

export class GetAllPosts {
  // noinspection JSUnusedGlobalSymbols
  static type = '[posts] getAllPosts';
}

export class AddPost {
  // noinspection JSUnusedGlobalSymbols
  static type = '[posts] addPost';

  constructor( public readonly post : Post ) {
  }
}

export class DeletePost {
  // noinspection JSUnusedGlobalSymbols
  static type = '[posts] deletePost';

  constructor( public readonly id : number ) {
  }
}
