import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CourseComponent} from './course/course.component';
import {HttpClientModule} from '@angular/common/http';
import {CourseDialogComponent} from './course-dialog/course-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {LessonComponent} from './lesson/lesson.component';
import {SafeUrlPipe} from './common/safe-url.pipe';
import {MessagesComponent} from './messages/messages.component';
import {SearchLessonsComponent} from './search-lessons/search-lessons.component';
import { LoadingComponent } from './loading/loading.component';
import { RandomComponent } from './random/random.component';
import { MaterialModule } from './material/material.module';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    CourseDialogComponent,
    LoginComponent,
    LessonComponent,
    SafeUrlPipe,
    MessagesComponent,
    SearchLessonsComponent,
    LoadingComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    CKEditorModule,
    QuillModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [CourseDialogComponent]
})
export class AppModule {
}
