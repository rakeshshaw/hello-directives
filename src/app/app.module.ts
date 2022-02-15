import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZippyComponent } from './components/zippy/zippy.component';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { GithubFollowersComponent } from './components/github-followers/github-followers.component';
// import { HttpModule } from '@angular/http';
// import { DataService } from './services/data.service';
// import { PostsService } from './services/posts/posts.service';
// import { GithubFollowersService } from './services/github-followers/github-followers.service';
// import { AppErrorHandlers } from './common/errors/app-error-handler';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    CourseFormComponent,
    ChangePasswordComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
