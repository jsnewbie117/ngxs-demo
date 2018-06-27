import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './posts/posts.component';

const routes : Routes = [
  {
    path : 'auth',
    component : AuthComponent
  },
  {
    path : 'posts',
    component : PostsComponent
  },
  {
    path : 'posts/:id',
    component : PostDetailComponent
  },
  {
    path : 'posts/new',
    component : PostDetailComponent
  },
  {
    path : '**',
    redirectTo : '/posts'
  }
];

@NgModule( {
  imports : [ RouterModule.forRoot( routes ) ],
  exports : [ RouterModule ]
} )
export class AppRoutingModule {
}
