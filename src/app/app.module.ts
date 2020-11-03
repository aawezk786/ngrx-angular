import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { YoutubeLayoutComponent } from './components/youtube-layout/youtube-layout.component';
import { UsersComponent } from './containers/users/users.component';
import { PostsComponent } from './containers/posts/posts.component';
import { MaterialModule } from './material.module';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from './services/api.service';
import { HttpService } from './services/http.service';
import { UserListComponent } from './components/layouts/user-list/user-list.component';
import { ErrorComponent } from './components/layouts/error/error.component';
import { UserCardComponent } from './components/layouts/user-card/user-card.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { Repo } from './services/repo';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    YoutubeLayoutComponent,
    UsersComponent,
    PostsComponent,
    UserListComponent,
    ErrorComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FlexModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [ApiService,HttpService,Repo],
  bootstrap: [AppComponent]
})
export class AppModule { }
