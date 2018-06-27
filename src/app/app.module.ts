import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { CoreModule } from './_core/core.module';
import { SharedModule } from './_shared/shared.module';
import { PostsState } from './_state/posts/posts.state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './posts/posts.component';

@NgModule( {
  declarations : [
    AppComponent,
    AuthComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports : [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    NgxsModule.forRoot( [ PostsState ] )
  ],
  providers : [],
  bootstrap : [ AppComponent ]
} )
export class AppModule {
}
