import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// comment
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { NewUserComponent } from './new-user/new-user.component';
import {ServiceComponent} from './service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LocationPageComponent } from './location-page/location-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
// @ts-ignore
import {DialogComponent, SurveyComponent} from './survey/survey.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './user/user.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatStepperModule, MatToolbarModule
} from '@angular/material';
import * as firebase from 'firebase';
import { FilterPipe } from './filter.pipe';
import {FaqComponent} from './faq-page/faq.component';
import {BlogComponent} from './blog/blog.component';
import {Blog1Component} from './blog/blog1/blog1.component';
import {Blog2Component} from './blog/blog2/blog2.component';
import {Blog3Component} from './blog/blog3/blog3.component';
import {Blog4Component} from './blog/blog4/blog4.component';
import {ErrorComponent} from './shared/error.component';
import { NavbarComponent } from './navbar/navbar.component';

firebase.initializeApp(environment.firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    ServiceComponent,
    LocationPageComponent,
    SearchBarComponent,
    AboutPageComponent,
    UserListComponent,
    SurveyComponent,
    FaqComponent,
    QuestionFormComponent,
    HomeComponent,
    FeedbackComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    FilterPipe,
    UserComponent,
    DialogComponent,
    BlogComponent,
    Blog1Component,
    Blog2Component,
    Blog3Component,
    Blog4Component,
    ErrorComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'lab3'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatStepperModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, ErrorComponent],
})
export class AppModule { }
