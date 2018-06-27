import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { PostFormComponent } from './post-form/post-form.component';
import { PostsComponent } from './posts/posts.component';

@NgModule( {
  declarations : [
    AppComponent,
    AuthComponent,
    PostsComponent,
    PostDetailComponent,
    PostFormComponent
  ],
  imports : [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxsModule.forRoot( [ PostsState ] ),
    FlexLayoutModule
  ],
  providers : [],
  bootstrap : [ AppComponent ]
} )
export class AppModule {
}
