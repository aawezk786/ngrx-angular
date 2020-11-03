import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostsComponent } from './containers/posts/posts.component';
import { UsersComponent } from './containers/users/users.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {
      path: '',
      component : UsersComponent
    },
    {
      path: 'post',
      component: PostsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
