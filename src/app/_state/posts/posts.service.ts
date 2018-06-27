import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './posts.model';

@Injectable( {
  providedIn : 'root'
} )
export class PostsService {

  private readonly apiUrl = 'http://reduxblog.herokuapp.com/api/posts';
  private apiKey = '123123';
  private params = {
    params : { key : this.apiKey }
  };

  constructor( private http : HttpClient ) {
  }

  getPosts() {
    return this.http.get( this.apiUrl, this.params );
  }

  getPost( id : number ) {
    return this.http.get( `${this.apiUrl}/${id}`, this.params );
  }

  addPost( post : Post ) {
    return this.http.post( this.apiUrl, post, this.params );
  }

  deletePost( id : number ) {
    return this.http.delete( `${this.apiUrl}/${id}`, this.params );
  }

}
